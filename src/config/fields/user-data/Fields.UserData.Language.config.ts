import type { Language } from "@resume-api/types/user-data/items/Language";
import type { FormField } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";

const FieldsLanguage: FormField<Language>[] = [
    { type: "text", name: "name", label: I18n.FORM.DATA.LANGUAGE.FIELD.NAME, required: true },
    { type: "text", name: "proficiency", label: I18n.FORM.DATA.LANGUAGE.FIELD.PROFICIENCY, suggestions: I18n.FORM.DATA.LANGUAGE.FIELD.PROFICIENCY_SUGGESTIONS, },
];

export default FieldsLanguage;