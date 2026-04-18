let r;
var s = (n) => {
    if (!r) {
        const o = n.forwardRef(({color: i = "currentColor", size: e = 24, ...t}, l) => {
            return n.createElement("svg", {ref: l, xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: i, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t}, n.createElement("path", {d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}), n.createElement("polyline", {points: "15 3 21 3 21 9"}), n.createElement("line", {x1: "10", y1: "14", x2: "21", y2: "3"}));
        });
        o.displayName = "ExternalLink",r = o;
    }
    return r;
};
const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}}};
export { __FramerMetadata__, s as default };