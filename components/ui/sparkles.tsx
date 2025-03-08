"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleSpeed?: number;
  particleBlendingMode?: string;
  hoverEffect?: boolean;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
    particleColor = "#FFF",
    particleSpeed = 1,
    particleBlendingMode = "screen",
    hoverEffect = false,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<
    Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }>
  >([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (context) {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < particleDensity; i++) {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const size = Math.random() * (maxSize - minSize) + minSize;
          const speedX = (Math.random() - 0.5) * particleSpeed;
          const speedY = (Math.random() - 0.5) * particleSpeed;
          newParticles.push({ x, y, size, speedX, speedY });
        }
        setParticles(newParticles);
      };

      generateParticles();
    }
  }, [context, minSize, maxSize, particleDensity, particleSpeed]);

  useEffect(() => {
    if (context && particles.length > 0) {
      let animationFrameId: number;

      const render = () => {
        if (context && canvasRef.current) {
          context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          context.fillStyle = background;
          context.fillRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          context.globalCompositeOperation = particleBlendingMode as GlobalCompositeOperation;

          particles.forEach((particle) => {
            context.beginPath();
            context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            context.fillStyle = particleColor;
            context.fill();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > window.innerWidth)
              particle.speedX *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight)
              particle.speedY *= -1;
          });
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [context, particles, background, particleColor, particleBlendingMode]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("fixed inset-0 pointer-events-none", className)}
    />
  );
};