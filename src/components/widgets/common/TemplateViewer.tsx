import usePDFWorker from "@api-hooks/usePDFWorker";
import usePDFCanvas from "@api-hooks/usePDFCanvas";
import Icons from "@icons/Icons";
import type { Template } from "@resume-api/types/template/Template";
import type TemplateProps from "@resume-api/types/template/TemplateProps";
import React from "react";

interface TemplateViewerProps extends TemplateProps {
    template?: Template | null;
    isStatic?: boolean;
}

const TemplateViewer: React.FC<TemplateViewerProps> = ({ data, theme, labels, template, isStatic }) => {
    const { blobUrl, loading } = usePDFWorker({ template, data, theme, labels, isStatic });
    const canvasRef = usePDFCanvas({ blobUrl });

    if (!template) return null;

    return (
        <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/50 text-accent-500 dark:text-accent-400">
                    <Icons.Loading />
                </div>
            )}
            {blobUrl && <canvas className="w-full h-auto" ref={canvasRef} />}
        </div>
    );
};

export default TemplateViewer;
