import type { Template } from "@resume-api/types/template/Template";
import { createContext } from "react";

export interface ResumeTemplateContextType {
  active: Template | null;
  select: (template: Template) => void;
  getAll: Template[];
}

const ResumeTemplateContext = createContext<ResumeTemplateContextType | undefined>(undefined);

export default ResumeTemplateContext;