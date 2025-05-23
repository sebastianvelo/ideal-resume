import type { Skill } from "@resume-api/types/user-data/items/Skill";
import type { FormField } from "@hooks/form/useMultiItemForm";
import I18n from "@language/common/I18nKeys";

const FieldsSkills: FormField<Skill>[] = [
    { type: "text", name: "name", label: I18n.FORM.DATA.SKILLS.FIELD.NAME, required: true },
    {
        type: "select",
        name: "level",
        label: I18n.FORM.DATA.SKILLS.FIELD.LEVEL,
        options: [
            { value: 1, label: I18n.FORM.DATA.SKILLS.OPTION.TRAINEE },
            { value: 2, label: I18n.FORM.DATA.SKILLS.OPTION.JR },
            { value: 3, label: I18n.FORM.DATA.SKILLS.OPTION.SSR },
            { value: 4, label: I18n.FORM.DATA.SKILLS.OPTION.SR },
            { value: 5, label: I18n.FORM.DATA.SKILLS.OPTION.EXPERT },
        ],
    },
    { type: "number", name: "yearsExperience", label: I18n.FORM.DATA.SKILLS.FIELD.YEARS_EXPERIENCE },
    { type: "url", name: "certificationUrl", label: I18n.FORM.DATA.SKILLS.FIELD.CERTIFICATION_URL },
];
export default FieldsSkills;