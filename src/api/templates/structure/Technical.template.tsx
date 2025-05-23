import { Document, Page, View } from "@react-pdf/renderer";
import { HeaderSection, MainContent, SidebarSection } from "@resume-api/templates/layout/Technical.layout";
import templateStyle from "@resume-api/templates/styles/Technical.styles";
import type TemplateProps from "@resume-api/types/template/TemplateProps";
import React from "react";

const TemplateTechnical: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = templateStyle(theme || undefined);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <HeaderSection {...props} styles={styles} />
                <View style={styles.common.divider} />
                <View style={styles.layout.mainContent}>
                    <MainContent {...props} styles={styles} />
                    <SidebarSection {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateTechnical;