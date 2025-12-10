"use client";

import { useEffect, useRef, useId } from "react";
import type React from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
  isActive?: boolean;
}

// Global set to track which highlighters have already animated
const animatedHighlighters = new Set<string>();

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
  isActive = true,
}: HighlighterProps) {
  const id = useId();
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If isView is true, wait for inView before creating annotation
  const canCreate = !isView || isInView;

  // Create annotation once when conditions are met
  useEffect(() => {
    if (!canCreate || !isActive) return;

    const element = elementRef.current;
    if (!element) return;

    // Skip if annotation already exists
    if (annotationRef.current) return;

    const hasAnimated = animatedHighlighters.has(id);
    const duration = hasAnimated ? 0 : animationDuration;

    const annotation = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration: duration,
      iterations,
      padding,
      multiline,
    });

    annotationRef.current = annotation;
    annotation.show();
    animatedHighlighters.add(id);

    // Cleanup only on unmount
    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove();
        annotationRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canCreate, isActive]);

  // Handle isActive toggle (hide/show without destroying)
  useEffect(() => {
    if (!annotationRef.current) return;

    if (isActive) {
      annotationRef.current.show();
    } else {
      annotationRef.current.hide();
    }
  }, [isActive]);

  // Refresh annotation position when layout changes (e.g., sibling expands)
  useEffect(() => {
    if (!annotationRef.current) return;

    const refreshAnnotation = () => {
      if (annotationRef.current && isActive) {
        // Hide and show to force recalculation of position
        annotationRef.current.hide();
        annotationRef.current.show();
      }
    };

    // Use ResizeObserver on document body to detect layout changes
    const resizeObserver = new ResizeObserver(() => {
      // Debounce the refresh
      requestAnimationFrame(refreshAnnotation);
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isActive]);

  return (
    <span
      ref={elementRef}
      className="relative inline-block bg-transparent"
      style={{
        paddingBottom: `${strokeWidth}px`,
        paddingLeft: `${padding}px`,
        paddingRight: `${padding}px`,
      }}
    >
      {children}
    </span>
  );
}
