import type { TabType, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import ViewTemplatePreview from "@components/views/ViewTemplatePreview";
import ViewTemplateGallery from "@components/views/ViewTemplateGallery";
import ViewUserDataForm from "@components/views/ViewUserDataForm";
import Icons from "@icons/Icons";
import I18n from "@language/common/I18nKeys";

const tabs: TabType[] = [
  {
    id: "userData",
    text: I18n.APP.TAB.FORM,
    component: <ViewUserDataForm />,
    children: <Icons.Person />
  },
  {
    id: "gallery",
    text: I18n.APP.TAB.GALLERY,
    component: <ViewTemplateGallery />,
    children: <Icons.Sheet />
  },
  {
    id: "preview",
    text: I18n.APP.TAB.PREVIEW,
    component: <ViewTemplatePreview />,
    children: <Icons.View />
  }
];

const layoutMobileTabs: TabsContainerProps = {
  tabs,
  animationDuration: 300,
  slideDirection: "right",
  tabsClassName: "fixed bottom-0 z-50 h-16 w-full",
  contentClassName: "w-full lg:px-16",
};

export default layoutMobileTabs;