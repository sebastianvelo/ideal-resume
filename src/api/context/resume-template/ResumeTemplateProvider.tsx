import type { Template } from "@resume-api/types/template/Template";
import React, { ReactNode, useMemo, useState } from "react";
import ResumeTemplateContext, { type ResumeTemplateContextType } from "./ResumeTemplateContext";
import templates from "./templates";

interface ResumeTemplateProviderProps {
  children: ReactNode;
  defaultTemplate?: Template;
}

const ResumeTemplateProvider: React.FC<ResumeTemplateProviderProps> = ({ children, defaultTemplate = templates[0] }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(defaultTemplate);

  const value = useMemo<ResumeTemplateContextType>(() => ({
    active: selectedTemplate,
    select: setSelectedTemplate,
    getAll: templates
  }), [selectedTemplate]);

  return (
    <ResumeTemplateContext.Provider value={value}>
      {children}
    </ResumeTemplateContext.Provider>
  );
};

export default ResumeTemplateProvider;