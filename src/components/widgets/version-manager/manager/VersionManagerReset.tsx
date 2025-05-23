import Text from "@components/ui/text/Text";
import I18n from "@language/common/I18nKeys";
import useUserData from "@resume-api/hooks/useUserData";
import React from "react";

const VersionManagerReset: React.FC = () => {
    const { createNew } = useUserData();

    return (
        <button className="w-full text-left" onClick={createNew}>
            <Text>{I18n.VERSION_MANAGER.RESET.BUTTON}</Text>
        </button>
    );
};

export default VersionManagerReset;