'use client';

import { useRef, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { Agentation } from '@/components/playground-kit/Agentation';
import { cn } from '@/utils/cn';
import { Canvas } from './components/Canvas';
import { Toolbar } from './components/Toolbar';
import { Minimap } from './components/Minimap';
import { TemplateSelector } from './components/TemplateSelector';
import { InlinePreview } from './components/InlinePreview';
import {
  elementsAtom,
  viewportAtom,
  isMinimapVisibleAtom,
  isInlineViewAtom,
} from './atoms';

export default function WhiteboardPage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [elements] = useAtom(elementsAtom);
  const [viewport, setViewport] = useAtom(viewportAtom);
  const [isMinimapVisible] = useAtom(isMinimapVisibleAtom);
  const [isInlineView, setIsInlineView] = useAtom(isInlineViewAtom);
  const [templateSelectorOpen, setTemplateSelectorOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFitToView = () => {
    if (elements.length === 0) return;

    // Calculate bounds
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    elements.forEach((el) => {
      minX = Math.min(minX, el.x);
      minY = Math.min(minY, el.y);
      maxX = Math.max(maxX, el.x + el.width);
      maxY = Math.max(maxY, el.y + el.height);
    });

    const contentWidth = maxX - minX;
    const contentHeight = maxY - minY;
    const padding = 100;

    const scaleX = (window.innerWidth - padding * 2) / contentWidth;
    const scaleY = (window.innerHeight - padding * 2) / contentHeight;
    const newZoom = Math.min(scaleX, scaleY, 1);

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    setViewport({
      x: window.innerWidth / 2 - centerX * newZoom,
      y: window.innerHeight / 2 - centerY * newZoom,
      zoom: newZoom,
    });
  };

  useEffect(() => {
    const handleFitToViewEvent = () => {
      handleFitToView();
    };
    window.addEventListener('fitToView', handleFitToViewEvent);
    return () => window.removeEventListener('fitToView', handleFitToViewEvent);
  }, [elements]);

  const handleEnterFullMode = () => {
    setIsInlineView(false);
  };

  // Show template selector on first load if no elements
  useEffect(() => {
    if (elements.length === 0 && !isInlineView) {
      const timer = setTimeout(() => {
        setTemplateSelectorOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Agentation>
      <div className="relative w-full h-screen overflow-hidden bg-bg-primary">
        {isInlineView ? (
          <div className="p-8">
            <InlinePreview onEnterFullMode={handleEnterFullMode} />
          </div>
        ) : (
          <>
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Toolbar
                canvasRef={canvasRef}
                onFitToView={handleFitToView}
                onSelectTemplate={() => setTemplateSelectorOpen(true)}
                isMobile={isMobile}
              />
            </motion.div>

            {/* Canvas */}
            <Canvas canvasRef={canvasRef} />

            {/* Minimap */}
            {isMinimapVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <Minimap />
              </motion.div>
            )}

            {/* Template Selector */}
            <TemplateSelector
              open={templateSelectorOpen}
              onOpenChange={setTemplateSelectorOpen}
            />

            {/* Keyboard shortcuts hint */}
            {!isMobile && elements.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className={cn(
                  'fixed bottom-4 left-4 px-3 py-2',
                  'rounded-lg border border-border-primary bg-bg-elevated/95',
                  'text-caption text-text-tertiary',
                  'shadow-sm-outline'
                )}
              >
                <div className="flex items-center gap-4">
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-primary text-text-secondary">
                      Cmd/Ctrl
                    </kbd>
                    {' + '}
                    <kbd className="px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-primary text-text-secondary">
                      0
                    </kbd>
                    {' '}
                    Fit to view
                  </span>
                  <span className="text-border-primary">•</span>
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-primary text-text-secondary">
                      Cmd/Ctrl
                    </kbd>
                    {' + '}
                    scroll to zoom
                  </span>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </Agentation>
  );
}
