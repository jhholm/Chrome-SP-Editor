import { INavigationService } from "./types.js";
import "./web.js";
export { INavNodeUpdateResult, INavigation, INavigationNode, INavigationNodeAddResult, INavigationNodes, INavigationService, Navigation, NavigationNode, NavigationNodes, NavigationService, IMenuNode, IMenuNodeCollection, ISerializableNavigationNode, INavNodeInfo, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        readonly navigation: INavigationService;
    }
}
//# sourceMappingURL=index.d.ts.map