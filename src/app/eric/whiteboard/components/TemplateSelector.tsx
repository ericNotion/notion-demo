'use client';

import { useAtom } from 'jotai';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/playground-kit/Button';
import { cn } from '@/utils/cn';
import { elementsAtom } from '../atoms';
import { templates } from '../templates/templates';
import type { WhiteboardElement } from '../types';

interface TemplateSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TemplateSelector({ open, onOpenChange }: TemplateSelectorProps) {
  const [, setElements] = useAtom(elementsAtom);

  const handleSelectTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (!template) return;

    const newElements: WhiteboardElement[] = template.elements.map((el, index) => ({
      ...el,
      id: `${templateId}-${index}-${Date.now()}`,
    }));

    setElements(newElements);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Choose a template</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template.id)}
              className={cn(
                'group relative p-6 rounded-lg border border-border-primary',
                'bg-bg-secondary hover:bg-bg-tertiary',
                'transition-colors cursor-pointer text-left',
                'focus:outline-none focus:ring-2 focus:ring-blue-500'
              )}
            >
              <div className="flex items-start gap-3">
                <div className="text-4xl">{template.preview}</div>
                <div className="flex-1">
                  <h3 className="text-body-lg font-semibold text-text-primary mb-1">
                    {template.name}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {template.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="primary" size="sm" className="w-full">
                  Use template
                </Button>
              </div>
            </button>
          ))}
        </div>

        {/* Blank canvas option */}
        <button
          onClick={() => {
            setElements([]);
            onOpenChange(false);
          }}
          className={cn(
            'w-full p-4 rounded-lg border border-border-primary',
            'bg-bg-secondary hover:bg-bg-tertiary',
            'transition-colors cursor-pointer text-center',
            'focus:outline-none focus:ring-2 focus:ring-blue-500'
          )}
        >
          <span className="text-body font-medium text-text-primary">
            Start with blank canvas
          </span>
        </button>
      </DialogContent>
    </Dialog>
  );
}
