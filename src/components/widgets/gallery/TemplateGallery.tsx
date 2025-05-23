import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import galleryTabs from "@config/tabs/Tabs.Gallery.config";
import React from "react";
import I18n from "@language/common/I18nKeys";

const TemplateGallery: React.FC = () => {

  return (
    <div className="2xl:w-full xl:px-4">
      <ViewTitle title={I18n.GALLERY.TITLE} subtitle={I18n.GALLERY.SUBTITLE} />
      <TabsContainer {...galleryTabs} />
    </div>
  );
};

export default TemplateGallery;