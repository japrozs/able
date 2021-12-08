import React from "react";

interface ProductSettingsPanelProps {}

export const ProductSettingsPanel: React.FC<ProductSettingsPanelProps> =
    ({}) => {
        return (
            <div>
                <p>rename project</p>
                <p>delete project</p>
            </div>
        );
    };
