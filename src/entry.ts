import { App, Component } from "vue";

// Import types
// Import components
import * as components from "./components";
import { InstallFunction } from "./types";

export function createWebUiTheme(): InstallFunction {
    const plugin: InstallFunction = {
        install(app: App) {
            if (this.installed) { return; }
            this.installed = true;

            Object.entries(components).forEach(([componentName, component]) => {
                app.component(componentName, component as Component);
            });
        },
    };

    return plugin;
}

export * from "./components";
export * from "./types";
export * from "./directives";
export * from "./mixins";
