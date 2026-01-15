(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/stars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PointMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Preload.js [app-client] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$random$2f$dist$2f$maath$2d$random$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/maath/random/dist/maath-random.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$index$2d$43782085$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__inSphere$3e$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/index-43782085.esm.js [app-client] (ecmascript) <export a as inSphere>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Stars = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "b0f5edd63654e4889fc748c546c7d317a412a4bfa00dad7f5a2c294760ba4f7a") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0f5edd63654e4889fc748c546c7d317a412a4bfa00dad7f5a2c294760ba4f7a";
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [sphere] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_temp);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (state, delta)=>{
            if (ref.current) {
                ref.current.rotation.x = ref.current.rotation.x - delta / 10;
                ref.current.rotation.y = ref.current.rotation.y - delta / 15;
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0,
            Math.PI / 4
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointMaterial"], {
            transparent: true,
            color: "#f272c8",
            size: 0.002,
            sizeAttenuation: true,
            depthWrite: false
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/stars.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== props || $[5] !== sphere) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            rotation: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"], {
                ref: ref,
                positions: sphere,
                stride: 3,
                frustumCulled: true,
                ...props,
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/stars.tsx",
                lineNumber: 48,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/stars.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = props;
        $[5] = sphere;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_s(Stars, "N82DFZPUx6baZSXBHdJL7szbxgk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Stars;
const StarsCanvas = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "b0f5edd63654e4889fc748c546c7d317a412a4bfa00dad7f5a2c294760ba4f7a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0f5edd63654e4889fc748c546c7d317a412a4bfa00dad7f5a2c294760ba4f7a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            position: [
                0,
                0,
                1
            ]
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-auto absolute inset-0 z-[-1]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: t0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {}, void 0, false, {
                            fileName: "[project]/src/components/canvas/stars.tsx",
                            lineNumber: 76,
                            columnNumber: 111
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/stars.tsx",
                        lineNumber: 76,
                        columnNumber: 85
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Preload"], {
                        all: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/stars.tsx",
                        lineNumber: 76,
                        columnNumber: 131
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/stars.tsx",
                lineNumber: 76,
                columnNumber: 65
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/stars.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c1 = StarsCanvas;
const __TURBOPACK__default__export__ = StarsCanvas;
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$index$2d$43782085$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__inSphere$3e$__["inSphere"](new Float32Array(5000), {
        radius: 1.2
    });
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Stars");
__turbopack_context__.k.register(_c1, "StarsCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/stars.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/stars.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@react-three/drei/core/Points.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point,
    "Points",
    ()=>Points,
    "PointsBuffer",
    ()=>PointsBuffer,
    "PositionPoint",
    ()=>PositionPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
;
;
;
;
const _inverseMatrix = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const _ray = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"]();
const _sphere = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"]();
const _position = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
class PositionPoint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"] {
    constructor(){
        super();
        this.size = 0;
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('white');
        this.instance = {
            current: undefined
        };
        this.instanceKey = {
            current: undefined
        };
    }
    // This will allow the virtual instance have bounds
    get geometry() {
        var _this$instance$curren;
        return (_this$instance$curren = this.instance.current) == null ? void 0 : _this$instance$curren.geometry;
    }
    raycast(raycaster, intersects) {
        var _raycaster$params$Poi, _raycaster$params$Poi2;
        const parent = this.instance.current;
        if (!parent || !parent.geometry) return;
        const instanceId = parent.userData.instances.indexOf(this.instanceKey);
        // If the instance wasn't found or exceeds the parents draw range, bail out
        if (instanceId === -1 || instanceId > parent.geometry.drawRange.count) return;
        const threshold = (_raycaster$params$Poi = (_raycaster$params$Poi2 = raycaster.params.Points) == null ? void 0 : _raycaster$params$Poi2.threshold) !== null && _raycaster$params$Poi !== void 0 ? _raycaster$params$Poi : 1;
        _sphere.set(this.getWorldPosition(_position), threshold);
        if (raycaster.ray.intersectsSphere(_sphere) === false) return;
        _inverseMatrix.copy(parent.matrixWorld).invert();
        _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
        const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
        const localThresholdSq = localThreshold * localThreshold;
        const rayPointDistanceSq = _ray.distanceSqToPoint(this.position);
        if (rayPointDistanceSq < localThresholdSq) {
            const intersectPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            _ray.closestPointToPoint(this.position, intersectPoint);
            intersectPoint.applyMatrix4(this.matrixWorld);
            const distance = raycaster.ray.origin.distanceTo(intersectPoint);
            if (distance < raycaster.near || distance > raycaster.far) return;
            intersects.push({
                distance: distance,
                distanceToRay: Math.sqrt(rayPointDistanceSq),
                point: intersectPoint,
                index: instanceId,
                face: null,
                object: this
            });
        }
    }
}
let i, positionRef;
const context = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const parentMatrix = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const position = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
/**
 * Instance implementation, relies on react + context to update the attributes based on the children of this component
 */ const PointsInstances = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, range, limit = 1000, ...props }, ref)=>{
    const parentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "PointsInstances.useImperativeHandle": ()=>parentRef.current
    }["PointsInstances.useImperativeHandle"], []);
    const [refs, setRefs] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [[positions, colors, sizes]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "PointsInstances.useState": ()=>[
                new Float32Array(limit * 3),
                Float32Array.from({
                    length: limit * 3
                }, {
                    "PointsInstances.useState": ()=>1
                }["PointsInstances.useState"]),
                Float32Array.from({
                    length: limit
                }, {
                    "PointsInstances.useState": ()=>1
                }["PointsInstances.useState"])
            ]
    }["PointsInstances.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PointsInstances.useEffect": ()=>{
            // We might be a frame too late? 🤷‍♂️
            parentRef.current.geometry.attributes.position.needsUpdate = true;
        }
    }["PointsInstances.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "PointsInstances.useFrame": ()=>{
            parentRef.current.updateMatrix();
            parentRef.current.updateMatrixWorld();
            parentMatrix.copy(parentRef.current.matrixWorld).invert();
            parentRef.current.geometry.drawRange.count = Math.min(limit, range !== undefined ? range : limit, refs.length);
            for(i = 0; i < refs.length; i++){
                positionRef = refs[i].current;
                positionRef.getWorldPosition(position).applyMatrix4(parentMatrix);
                position.toArray(positions, i * 3);
                parentRef.current.geometry.attributes.position.needsUpdate = true;
                positionRef.matrixWorldNeedsUpdate = true;
                positionRef.color.toArray(colors, i * 3);
                parentRef.current.geometry.attributes.color.needsUpdate = true;
                sizes.set([
                    positionRef.size
                ], i);
                parentRef.current.geometry.attributes.size.needsUpdate = true;
            }
        }
    }["PointsInstances.useFrame"]);
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PointsInstances.useMemo[api]": ()=>({
                getParent: ({
                    "PointsInstances.useMemo[api]": ()=>parentRef
                })["PointsInstances.useMemo[api]"],
                subscribe: ({
                    "PointsInstances.useMemo[api]": (ref)=>{
                        setRefs({
                            "PointsInstances.useMemo[api]": (refs)=>[
                                    ...refs,
                                    ref
                                ]
                        }["PointsInstances.useMemo[api]"]);
                        return ({
                            "PointsInstances.useMemo[api]": ()=>setRefs({
                                    "PointsInstances.useMemo[api]": (refs)=>refs.filter({
                                            "PointsInstances.useMemo[api]": (item)=>item.current !== ref.current
                                        }["PointsInstances.useMemo[api]"])
                                }["PointsInstances.useMemo[api]"])
                        })["PointsInstances.useMemo[api]"];
                    }
                })["PointsInstances.useMemo[api]"]
            })
    }["PointsInstances.useMemo[api]"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        userData: {
            instances: refs
        },
        matrixAutoUpdate: false,
        ref: parentRef,
        raycast: ()=>null
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            positions,
            3
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            colors,
            3
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            sizes,
            1
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: api
    }, children));
});
const Point = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, ...props }, ref)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Point.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                PositionPoint
            })
    }["Point.useMemo"], []);
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Point.useImperativeHandle": ()=>group.current
    }["Point.useImperativeHandle"], []);
    const { subscribe, getParent } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Point.useLayoutEffect": ()=>subscribe(group)
    }["Point.useLayoutEffect"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("positionPoint", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        instance: getParent(),
        instanceKey: group,
        ref: group
    }, props), children);
});
/**
 * Buffer implementation, relies on complete buffers of the correct number, leaves it to the user to update them
 */ const PointsBuffer = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, positions, colors, sizes, stride = 3, ...props }, forwardedRef)=>{
    const pointsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardedRef, {
        "PointsBuffer.useImperativeHandle": ()=>pointsRef.current
    }["PointsBuffer.useImperativeHandle"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "PointsBuffer.useFrame": ()=>{
            const attr = pointsRef.current.geometry.attributes;
            attr.position.needsUpdate = true;
            if (colors) attr.color.needsUpdate = true;
            if (sizes) attr.size.needsUpdate = true;
        }
    }["PointsBuffer.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: pointsRef
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            positions,
            stride
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), colors && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            colors,
            stride
        ],
        count: colors.length / stride,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), sizes && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            sizes,
            1
        ],
        count: sizes.length / stride,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    })), children);
});
const Points = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    if (props.positions instanceof Float32Array) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PointsBuffer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            ref: forwardedRef
        }));
    } else return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PointsInstances, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: forwardedRef
    }));
});
;
}),
"[project]/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const getVersion = ()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, ''));
const version = /* @__PURE__ */ getVersion();
;
}),
"[project]/node_modules/@react-three/drei/core/PointMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointMaterial",
    ()=>PointMaterial,
    "PointMaterialImpl",
    ()=>PointMaterialImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)");
;
;
;
;
const opaque_fragment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'opaque_fragment' : 'output_fragment';
class PointMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"] {
    constructor(props){
        super(props);
        this.onBeforeCompile = (shader, renderer)=>{
            const { isWebGL2 } = renderer.capabilities;
            shader.fragmentShader = shader.fragmentShader.replace(`#include <${opaque_fragment}>`, `
        ${!isWebGL2 ? `#extension GL_OES_standard_derivatives : enable\n#include <${opaque_fragment}>` : `#include <${opaque_fragment}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
      `);
        };
    }
}
const PointMaterial = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const [material] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "PointMaterial.useState": ()=>new PointMaterialImpl(null)
    }["PointMaterial.useState"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        object: material,
        ref: ref,
        attach: "material"
    }));
});
;
}),
"[project]/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_objectSpread2,
    "a",
    ()=>_defineProperty
]);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
;
}),
"[project]/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_classCallCheck
]);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
;
}),
"[project]/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_setPrototypeOf,
    "a",
    ()=>_isNativeReflectConstruct
]);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
;
}),
"[project]/node_modules/maath/dist/matrix-baa530bf.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>matrixSum3,
    "b",
    ()=>determinant2,
    "c",
    ()=>determinant4,
    "d",
    ()=>determinant3,
    "g",
    ()=>getMinor,
    "m",
    ()=>matrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
/**
 *
 * @param terms
 *
 * | a b |
 * | c d |
 *
 * @returns {number} determinant
 */ function determinant2() {
    for(var _len = arguments.length, terms = new Array(_len), _key = 0; _key < _len; _key++){
        terms[_key] = arguments[_key];
    }
    var a = terms[0], b = terms[1], c = terms[2], d = terms[3];
    return a * d - b * c;
}
/**
 *
 * @param terms
 *
 * | a b c |
 * | d e f |
 * | g h i |
 *
 * @returns {number} determinant
 */ function determinant3() {
    for(var _len2 = arguments.length, terms = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
        terms[_key2] = arguments[_key2];
    }
    var a = terms[0], b = terms[1], c = terms[2], d = terms[3], e = terms[4], f = terms[5], g = terms[6], h = terms[7], i = terms[8];
    return a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
}
/**
 *
 * @param terms
 *
 * | a b c g |
 * | h i j k |
 * | l m n o |
 *
 * @returns {number} determinant
 */ function determinant4() {
    for(var _len3 = arguments.length, terms = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
        terms[_key3] = arguments[_key3];
    }
    terms[0];
    terms[1];
    terms[2];
    terms[3];
    terms[4];
    terms[5];
    terms[6];
    terms[7];
    terms[8];
    terms[9];
    terms[10];
    terms[11];
    terms[12];
    terms[13];
    terms[14]; // TODO
}
/**
 *
 * Get the determinant of matrix m without row r and col c
 *
 * @param {matrix} m Starter matrix
 * @param r row to remove
 * @param c col to remove
 *
 *     | a b c |
 * m = | d e f |
 *     | g h i |
 *
 * getMinor(m, 1, 1) would result in this determinant
 *
 * | a c |
 * | g i |
 *
 * @returns {number} determinant
 */ function getMinor(matrix, r, c) {
    var _matrixTranspose = matrix.clone().transpose();
    var x = [];
    var l = _matrixTranspose.elements.length;
    var n = Math.sqrt(l);
    for(var i = 0; i < l; i++){
        var element = _matrixTranspose.elements[i];
        var row = Math.floor(i / n);
        var col = i % n;
        if (row !== r - 1 && col !== c - 1) {
            x.push(element);
        }
    }
    return determinant3.apply(void 0, x);
}
/**
 *
 */ function matrixSum3(m1, m2) {
    var sum = [];
    var m1Array = m1.toArray();
    var m2Array = m2.toArray();
    for(var i = 0; i < m1Array.length; i++){
        sum[i] = m1Array[i] + m2Array[i];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix3"]().fromArray(sum);
}
var matrix = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    determinant2: determinant2,
    determinant3: determinant3,
    determinant4: determinant4,
    getMinor: getMinor,
    matrixSum3: matrixSum3
});
;
}),
"[project]/node_modules/maath/dist/triangle-b62b9067.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_slicedToArray,
    "a",
    ()=>_toConsumableArray,
    "b",
    ()=>triangleDeterminant,
    "c",
    ()=>arePointsCollinear,
    "d",
    ()=>doThreePointsMakeARight,
    "e",
    ()=>isTriangleClockwise,
    "f",
    ()=>isPointInCircumcircle,
    "g",
    ()=>getCircumcircle,
    "i",
    ()=>isPointInTriangle,
    "t",
    ()=>triangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/matrix-baa530bf.esm.js [app-client] (ecmascript)");
;
;
;
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _construct(Parent, args, Class) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
/**
 *
 * @param point
 *
 * @param triangle
 *
 * @returns {boolean} true if the point is in the triangle
 *
 * TODO: Find explainer
 */ function isPointInTriangle(point, triangle) {
    var _triangle$ = _slicedToArray(triangle[0], 2), ax = _triangle$[0], ay = _triangle$[1];
    var _triangle$2 = _slicedToArray(triangle[1], 2), bx = _triangle$2[0], by = _triangle$2[1];
    var _triangle$3 = _slicedToArray(triangle[2], 2), cx = _triangle$3[0], cy = _triangle$3[1];
    var _point = _slicedToArray(point, 2), px = _point[0], py = _point[1]; // TODO Sub with static calc
    var matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"](); // prettier-ignore
    matrix.set(ax, ay, ax * ax + ay * ay, 1, bx, by, bx * bx + by * by, 1, cx, cy, cx * cx + cy * cy, 1, px, py, px * px + py * py, 1);
    return matrix.determinant() <= 0;
}
function triangleDeterminant(triangle) {
    var _triangle$4 = _slicedToArray(triangle[0], 2), x1 = _triangle$4[0], y1 = _triangle$4[1];
    var _triangle$5 = _slicedToArray(triangle[1], 2), x2 = _triangle$5[0], y2 = _triangle$5[1];
    var _triangle$6 = _slicedToArray(triangle[2], 2), x3 = _triangle$6[0], y3 = _triangle$6[1]; // prettier-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(x1, y1, 1, x2, y2, 1, x3, y3, 1);
}
/**
 * Uses triangle area determinant to check if 3 points are collinear.
 * If they are, they can't make a triangle, so the determinant will be 0!
 *
 *      0     1     2
 * ─────■─────■─────■
 *
 *
 * Fun fact, you can use this same determinant to check the order of the points in the triangle
 *
 * NOTE: Should this use a buffer instead? NOTE: Should this use a buffer instead? [x0, y0, x1, y1, x2, y2]?
 *
 */ function arePointsCollinear(points) {
    return triangleDeterminant(points) === 0;
} // TODO This is the same principle as the prev function, find a way to make it have sense
function isTriangleClockwise(triangle) {
    return triangleDeterminant(triangle) < 0;
}
/**
 
The circumcircle is a circle touching all the vertices of a triangle or polygon.

             ┌───┐             
             │ B │             
             └───┘             
           .───●───.           
        ,─'   ╱ ╲   '─.        
      ,'     ╱   ╲     `.      
     ╱      ╱     ╲      ╲     
    ;      ╱       ╲      :    
    │     ╱         ╲     │    
    │    ╱           ╲    │    
    :   ╱             ╲   ;    
     ╲ ╱               ╲ ╱     
┌───┐ ●─────────────────● ┌───┐
│ A │  `.             ,'  │ C │
└───┘    '─.       ,─'    └───┘
            `─────'                         
 */ /**
 *
 * @param triangle
 *
 * @returns {number} circumcircle
 */ // https://math.stackexchange.com/a/1460096
function getCircumcircle(triangle) {
    // TS-TODO the next few lines are ignored because the types aren't current to the change in vectors (that can now be iterated)
    // @ts-ignore
    var _triangle$7 = _slicedToArray(triangle[0], 2), ax = _triangle$7[0], ay = _triangle$7[1]; // @ts-ignore
    var _triangle$8 = _slicedToArray(triangle[1], 2), bx = _triangle$8[0], by = _triangle$8[1]; // @ts-ignore
    var _triangle$9 = _slicedToArray(triangle[2], 2), cx = _triangle$9[0], cy = _triangle$9[1];
    if (arePointsCollinear(triangle)) return null; // points are collinear
    var m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"](); // prettier-ignore
    m.set(1, 1, 1, 1, ax * ax + ay * ay, ax, ay, 1, bx * bx + by * by, bx, by, 1, cx * cx + cy * cy, cx, cy, 1);
    var m11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(m, 1, 1);
    var m13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(m, 1, 3);
    var m12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(m, 1, 2);
    var m14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(m, 1, 4);
    var x0 = 0.5 * (m12 / m11);
    var y0 = 0.5 * (m13 / m11);
    var r2 = x0 * x0 + y0 * y0 + m14 / m11;
    return {
        x: Math.abs(x0) === 0 ? 0 : x0,
        y: Math.abs(y0) === 0 ? 0 : -y0,
        r: Math.sqrt(r2)
    };
} // https://stackoverflow.com/questions/39984709/how-can-i-check-wether-a-point-is-inside-the-circumcircle-of-3-points
function isPointInCircumcircle(point, triangle) {
    var _ref = Array.isArray(triangle[0]) ? triangle[0] : triangle[0].toArray(), _ref2 = _slicedToArray(_ref, 2), ax = _ref2[0], ay = _ref2[1];
    var _ref3 = Array.isArray(triangle[1]) ? triangle[1] : triangle[1].toArray(), _ref4 = _slicedToArray(_ref3, 2), bx = _ref4[0], by = _ref4[1];
    var _ref5 = Array.isArray(triangle[2]) ? triangle[2] : triangle[2].toArray(), _ref6 = _slicedToArray(_ref5, 2), cx = _ref6[0], cy = _ref6[1];
    var _point2 = _slicedToArray(point, 2), px = _point2[0], py = _point2[1];
    if (arePointsCollinear(triangle)) throw new Error("Collinear points don't form a triangle");
    /**
          | ax-px, ay-py, (ax-px)² + (ay-py)² |
    det = | bx-px, by-py, (bx-px)² + (by-py)² |
          | cx-px, cy-py, (cx-px)² + (cy-py)² |
  */ var x1mpx = ax - px;
    var aympy = ay - py;
    var bxmpx = bx - px;
    var bympy = by - py;
    var cxmpx = cx - px;
    var cympy = cy - py; // prettier-ignore
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(x1mpx, aympy, x1mpx * x1mpx + aympy * aympy, bxmpx, bympy, bxmpx * bxmpx + bympy * bympy, cxmpx, cympy, cxmpx * cxmpx + cympy * cympy); // if d is 0, the point is on C
    if (d === 0) {
        return true;
    }
    return !isTriangleClockwise(triangle) ? d > 0 : d < 0;
} // From https://algorithmtutor.com/Computational-Geometry/Determining-if-two-consecutive-segments-turn-left-or-right/
var mv1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
var mv2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
/**
 
     ╱      ╲     
    ╱        ╲    
   ▕          ▏   
                  
 right      left  

 * NOTE: Should this use a buffer instead? [x0, y0, x1, y1]?
 */ function doThreePointsMakeARight(points) {
    var _points$map = points.map(function(p) {
        if (Array.isArray(p)) {
            return _construct(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"], _toConsumableArray(p));
        }
        return p;
    }), _points$map2 = _slicedToArray(_points$map, 3), p1 = _points$map2[0], p2 = _points$map2[1], p3 = _points$map2[2];
    if (arePointsCollinear(points)) return false; // @ts-ignore
    var p2p1 = mv1.subVectors(p2, p1); // @ts-ignore
    var p3p1 = mv2.subVectors(p3, p1);
    var cross = p3p1.cross(p2p1);
    return cross > 0;
}
var triangle = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isPointInTriangle: isPointInTriangle,
    triangleDeterminant: triangleDeterminant,
    arePointsCollinear: arePointsCollinear,
    isTriangleClockwise: isTriangleClockwise,
    getCircumcircle: getCircumcircle,
    isPointInCircumcircle: isPointInCircumcircle,
    doThreePointsMakeARight: doThreePointsMakeARight
});
;
}),
"[project]/node_modules/maath/dist/misc-7d870b3c.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>degToRad,
    "b",
    ()=>fibonacciOnSphere,
    "c",
    ()=>clamp,
    "d",
    ()=>deltaAngle,
    "e",
    ()=>lexicographic,
    "f",
    ()=>fade,
    "g",
    ()=>convexHull,
    "h",
    ()=>remap,
    "i",
    ()=>inverseLerp,
    "j",
    ()=>rotateVectorOnVector,
    "k",
    ()=>pointToCoordinate,
    "l",
    ()=>lerp,
    "m",
    ()=>misc,
    "n",
    ()=>normalize,
    "o",
    ()=>coordinateToPoint,
    "p",
    ()=>pointOnCubeToPointOnSphere,
    "q",
    ()=>planeSegmentIntersection,
    "r",
    ()=>radToDeg,
    "s",
    ()=>pointToPlaneDistance,
    "t",
    ()=>getIndexFrom3D,
    "u",
    ()=>get3DFromIndex,
    "v",
    ()=>vectorEquals,
    "w",
    ()=>getIndexFrom2D,
    "x",
    ()=>get2DFromIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/triangle-b62b9067.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/matrix-baa530bf.esm.js [app-client] (ecmascript)");
;
;
;
/**
 * Clamps a value between a range.
 */ function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
} // Loops the value t, so that it is never larger than length and never smaller than 0.
function repeat(t, length) {
    return clamp(t - Math.floor(t / length) * length, 0, length);
} // Calculates the shortest difference between two given angles.
function deltaAngle(current, target) {
    var delta = repeat(target - current, Math.PI * 2);
    if (delta > Math.PI) delta -= Math.PI * 2;
    return delta;
}
/**
 * Converts degrees to radians.
 */ function degToRad(degrees) {
    return degrees / 180 * Math.PI;
}
/**
 * Converts radians to degrees.
 */ function radToDeg(radians) {
    return radians * 180 / Math.PI;
} // adapted from https://gist.github.com/stephanbogner/a5f50548a06bec723dcb0991dcbb0856 by https://twitter.com/st_phan
function fibonacciOnSphere(buffer, _ref) {
    var _ref$radius = _ref.radius, radius = _ref$radius === void 0 ? 1 : _ref$radius;
    var samples = buffer.length / 3;
    var offset = 2 / samples;
    var increment = Math.PI * (3 - 2.2360679775);
    for(var i = 0; i < buffer.length; i += 3){
        var y = i * offset - 1 + offset / 2;
        var distance = Math.sqrt(1 - Math.pow(y, 2));
        var phi = i % samples * increment;
        var x = Math.cos(phi) * distance;
        var z = Math.sin(phi) * distance;
        buffer[i] = x * radius;
        buffer[i + 1] = y * radius;
        buffer[i + 2] = z * radius;
    }
} // @ts-ignore
function vectorEquals(a, b) {
    var eps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.EPSILON;
    return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps;
}
/**
 * Sorts vectors in lexicographic order, works with both v2 and v3
 *
 *  Use as:
 *  const sorted = arrayOfVectors.sort(lexicographicOrder)
 */ // https://en.wikipedia.org/wiki/Lexicographic_order
function lexicographic(a, b) {
    if (a.x === b.x) {
        // do a check to see if points is 3D,
        // in which case add y eq check and sort by z
        if (typeof a.z !== "undefined") {
            if (a.y === b.y) {
                return a.z - b.z;
            }
        }
        return a.y - b.y;
    }
    return a.x - b.x;
}
/**
 * Convex Hull
 *
 * Returns an array of 2D Vectors representing the convex hull of a set of 2D Vectors
 */ /**
 * Calculate the convex hull of a set of points
 */ function convexHull(_points) {
    var points = _points.sort(lexicographic); // put p1 and p2 in a list lUpper with p1 as the first point
    var lUpper = [
        points[0],
        points[1]
    ]; // for i <- 3 to n
    for(var i = 2; i < points.length; i++){
        lUpper.push(points[i]); // while lUpper contains more than 2 points and the last three points in lUpper do not make a right turn
        while(lUpper.length > 2 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(lUpper.slice(-3)))){
            // delete the middle of the last three points from lUpper
            lUpper.splice(lUpper.length - 2, 1);
        }
    } // put pn and pn-1 in a list lLower with pn as the first point
    var lLower = [
        points[points.length - 1],
        points[points.length - 2]
    ]; // for (i <- n - 2 downto 1)
    for(var _i = points.length - 3; _i >= 0; _i--){
        // append pi to lLower
        lLower.push(points[_i]); // while lLower contains more than 2 points and the last three points in lLower do not make a right turn
        while(lLower.length > 2 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(lLower.slice(-3)))){
            // delete the middle of the last three points from lLower
            lLower.splice(lLower.length - 2, 1);
        }
    } // remove the first and last point from lLower to avoid duplication of the points where the upper and lower hull meet
    lLower.splice(0, 1);
    lLower.splice(lLower.length - 1, 1); // prettier-ignore
    var c = [].concat(lUpper, lLower);
    return c;
}
function remap(x, _ref2, _ref3) {
    var _ref4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2, 2), low1 = _ref4[0], high1 = _ref4[1];
    var _ref5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref3, 2), low2 = _ref5[0], high2 = _ref5[1];
    return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}
/**
 *
 * https://www.desmos.com/calculator/vsnmlaljdu
 *
 * Ease-in-out, goes to -Infinite before 0 and Infinite after 1
 *
 * @param t
 * @returns
 */ function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}
/**
 *
 * Returns the result of linearly interpolating between input A and input B by input T.
 *
 * @param v0
 * @param v1
 * @param t
 * @returns
 */ function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}
/**
 *
 * Returns the linear parameter that produces the interpolant specified by input T within the range of input A to input B.
 *
 * @param v0
 * @param v1
 * @param t
 * @returns
 */ function inverseLerp(v0, v1, t) {
    return (t - v0) / (v1 - v0);
}
/**
 *
 */ function normalize(x, y, z) {
    var m = Math.sqrt(x * x + y * y + z * z);
    return [
        x / m,
        y / m,
        z / m
    ];
}
/**
 *
 */ function pointOnCubeToPointOnSphere(x, y, z) {
    var x2 = x * x;
    var y2 = y * y;
    var z2 = z * z;
    var nx = x * Math.sqrt(1 - (y2 + z2) / 2 + y2 * z2 / 3);
    var ny = y * Math.sqrt(1 - (z2 + x2) / 2 + z2 * x2 / 3);
    var nz = z * Math.sqrt(1 - (x2 + y2) / 2 + x2 * y2 / 3);
    return [
        nx,
        ny,
        nz
    ];
} // https://math.stackexchange.com/questions/180418/calculate-rotation-matrix-to-align-vector-a-to-vector-b-in-3d
/**
 * Give two unit vectors a and b, returns the transformation matrix that rotates a onto b.
 *
 * */ function rotateVectorOnVector(a, b) {
    var v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().crossVectors(a, b);
    var c = a.dot(b);
    var i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix3"]().identity(); //  skew-symmetric cross-product matrix of 𝑣 https://en.wikipedia.org/wiki/Skew-symmetric_matrix
    // prettier-ignore
    var vx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix3"]().set(0, -v.z, v.y, v.z, 0, -v.x, -v.y, v.x, 0);
    var vxsquared = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix3"]().multiplyMatrices(vx, vx).multiplyScalar(1 / (1 + c));
    var _final = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(i, vx), vxsquared);
    return _final;
} // calculate latitude and longitude (in radians) from point on unit sphere
function pointToCoordinate(x, y, z) {
    var lat = Math.asin(y);
    var lon = Math.atan2(x, -z);
    return [
        lat,
        lon
    ];
} // calculate point on unit sphere given latitude and logitude in radians
function coordinateToPoint(lat, lon) {
    var y = Math.sin(lat);
    var r = Math.cos(lat);
    var x = Math.sin(lon) * r;
    var z = -Math.cos(lon) * r;
    return [
        x,
        y,
        z
    ];
}
/**
 * Given a plane and a segment, return the intersection point if it exists or null it doesn't.
 */ function planeSegmentIntersection(plane, segment) {
    var _segment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(segment, 2), a = _segment[0], b = _segment[1];
    var matrix = rotateVectorOnVector(plane.normal, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    var t = inverseLerp(a.clone().applyMatrix3(matrix).y, b.clone().applyMatrix3(matrix).y, 0);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().lerpVectors(a, b, t);
}
/**
 * Given a plane and a point, return the distance.
 */ function pointToPlaneDistance(p, plane) {
    var d = plane.normal.dot(p); // TODO
    return d;
}
function getIndexFrom3D(coords, sides) {
    var _coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(coords, 3), ix = _coords[0], iy = _coords[1], iz = _coords[2];
    var _sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(sides, 2), rx = _sides[0], ry = _sides[1];
    return iz * rx * ry + iy * rx + ix;
}
function get3DFromIndex(index, size) {
    var _size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(size, 2), rx = _size[0], ry = _size[1];
    var a = rx * ry;
    var z = index / a;
    var b = index - a * z;
    var y = b / rx;
    var x = b % rx;
    return [
        x,
        y,
        z
    ];
}
function getIndexFrom2D(coords, size) {
    return coords[0] + size[0] * coords[1];
}
function get2DFromIndex(index, columns) {
    var x = index % columns;
    var y = Math.floor(index / columns);
    return [
        x,
        y
    ];
}
var misc = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    clamp: clamp,
    deltaAngle: deltaAngle,
    degToRad: degToRad,
    radToDeg: radToDeg,
    fibonacciOnSphere: fibonacciOnSphere,
    vectorEquals: vectorEquals,
    lexicographic: lexicographic,
    convexHull: convexHull,
    remap: remap,
    fade: fade,
    lerp: lerp,
    inverseLerp: inverseLerp,
    normalize: normalize,
    pointOnCubeToPointOnSphere: pointOnCubeToPointOnSphere,
    rotateVectorOnVector: rotateVectorOnVector,
    pointToCoordinate: pointToCoordinate,
    coordinateToPoint: coordinateToPoint,
    planeSegmentIntersection: planeSegmentIntersection,
    pointToPlaneDistance: pointToPlaneDistance,
    getIndexFrom3D: getIndexFrom3D,
    get3DFromIndex: get3DFromIndex,
    getIndexFrom2D: getIndexFrom2D,
    get2DFromIndex: get2DFromIndex
});
;
}),
"[project]/node_modules/maath/dist/index-43782085.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "G",
    ()=>Generator,
    "a",
    ()=>inSphere,
    "b",
    ()=>inCircle,
    "c",
    ()=>onCircle,
    "d",
    ()=>inRect,
    "e",
    ()=>onRect,
    "f",
    ()=>inBox,
    "g",
    ()=>onBox,
    "i",
    ()=>index,
    "n",
    ()=>noise,
    "o",
    ()=>onSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/misc-7d870b3c.esm.js [app-client] (ecmascript)");
;
;
;
/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */ var Grad = function Grad(x, y, z) {
    var _this = this;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Grad);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "dot2", function(x, y) {
        return _this.x * x + _this.y * y;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "dot3", function(x, y, z) {
        return _this.x * x + _this.y * y + _this.z * z;
    });
    this.x = x;
    this.y = y;
    this.z = z;
};
var grad3 = [
    new Grad(1, 1, 0),
    new Grad(-1, 1, 0),
    new Grad(1, -1, 0),
    new Grad(-1, -1, 0),
    new Grad(1, 0, 1),
    new Grad(-1, 0, 1),
    new Grad(1, 0, -1),
    new Grad(-1, 0, -1),
    new Grad(0, 1, 1),
    new Grad(0, -1, 1),
    new Grad(0, 1, -1),
    new Grad(0, -1, -1)
];
var p = [
    151,
    160,
    137,
    91,
    90,
    15,
    131,
    13,
    201,
    95,
    96,
    53,
    194,
    233,
    7,
    225,
    140,
    36,
    103,
    30,
    69,
    142,
    8,
    99,
    37,
    240,
    21,
    10,
    23,
    190,
    6,
    148,
    247,
    120,
    234,
    75,
    0,
    26,
    197,
    62,
    94,
    252,
    219,
    203,
    117,
    35,
    11,
    32,
    57,
    177,
    33,
    88,
    237,
    149,
    56,
    87,
    174,
    20,
    125,
    136,
    171,
    168,
    68,
    175,
    74,
    165,
    71,
    134,
    139,
    48,
    27,
    166,
    77,
    146,
    158,
    231,
    83,
    111,
    229,
    122,
    60,
    211,
    133,
    230,
    220,
    105,
    92,
    41,
    55,
    46,
    245,
    40,
    244,
    102,
    143,
    54,
    65,
    25,
    63,
    161,
    1,
    216,
    80,
    73,
    209,
    76,
    132,
    187,
    208,
    89,
    18,
    169,
    200,
    196,
    135,
    130,
    116,
    188,
    159,
    86,
    164,
    100,
    109,
    198,
    173,
    186,
    3,
    64,
    52,
    217,
    226,
    250,
    124,
    123,
    5,
    202,
    38,
    147,
    118,
    126,
    255,
    82,
    85,
    212,
    207,
    206,
    59,
    227,
    47,
    16,
    58,
    17,
    182,
    189,
    28,
    42,
    223,
    183,
    170,
    213,
    119,
    248,
    152,
    2,
    44,
    154,
    163,
    70,
    221,
    153,
    101,
    155,
    167,
    43,
    172,
    9,
    129,
    22,
    39,
    253,
    19,
    98,
    108,
    110,
    79,
    113,
    224,
    232,
    178,
    185,
    112,
    104,
    218,
    246,
    97,
    228,
    251,
    34,
    242,
    193,
    238,
    210,
    144,
    12,
    191,
    179,
    162,
    241,
    81,
    51,
    145,
    235,
    249,
    14,
    239,
    107,
    49,
    192,
    214,
    31,
    181,
    199,
    106,
    157,
    184,
    84,
    204,
    176,
    115,
    121,
    50,
    45,
    127,
    4,
    150,
    254,
    138,
    236,
    205,
    93,
    222,
    114,
    67,
    29,
    24,
    72,
    243,
    141,
    128,
    195,
    78,
    66,
    215,
    61,
    156,
    180
]; // To remove the need for index wrapping, double the permutation table length
var perm = new Array(512);
var gradP = new Array(512); // This isn't a very good seeding function, but it works ok. It supports 2^16
// different seed values. Write something better if you need more seeds.
var seed = function seed(_seed) {
    if (_seed > 0 && _seed < 1) {
        // Scale the seed out
        _seed *= 65536;
    }
    _seed = Math.floor(_seed);
    if (_seed < 256) {
        _seed |= _seed << 8;
    }
    for(var i = 0; i < 256; i++){
        var v;
        if (i & 1) {
            v = p[i] ^ _seed & 255;
        } else {
            v = p[i] ^ _seed >> 8 & 255;
        }
        perm[i] = perm[i + 256] = v;
        gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
};
seed(0);
/*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/ // Skewing and unskewing factors for 2, 3, and 4 dimensions
var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6; // 2D simplex noise
var simplex2 = function simplex2(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin + yin) * F2; // Hairy factor for 2D
    var i = Math.floor(xin + s);
    var j = Math.floor(yin + s);
    var t = (i + j) * G2;
    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin - j + t; // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if (x0 > y0) {
        // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        i1 = 1;
        j1 = 0;
    } else {
        // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        i1 = 0;
        j1 = 1;
    } // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2; // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i + perm[j]];
    var gi1 = gradP[i + i1 + perm[j + j1]];
    var gi2 = gradP[i + 1 + perm[j + 1]]; // Calculate the contribution from the three corners
    var t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 < 0) {
        n0 = 0;
    } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 < 0) {
        n1 = 0;
    } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 < 0) {
        n2 = 0;
    } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot2(x2, y2);
    } // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
}; // 3D simplex noise
var simplex3 = function simplex3(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin + yin + zin) * F3; // Hairy factor for 2D
    var i = Math.floor(xin + s);
    var j = Math.floor(yin + s);
    var k = Math.floor(zin + s);
    var t = (i + j + k) * G3;
    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin - j + t;
    var z0 = zin - k + t; // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if (x0 >= y0) {
        if (y0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
        } else if (x0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 0;
            k2 = 1;
        } else {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 1;
            j2 = 0;
            k2 = 1;
        }
    } else {
        if (y0 < z0) {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 0;
            j2 = 1;
            k2 = 1;
        } else if (x0 < z0) {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 0;
            j2 = 1;
            k2 = 1;
        } else {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
        }
    } // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;
    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;
    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3; // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i + perm[j + perm[k]]];
    var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
    var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
    var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]]; // Calculate the contribution from the four corners
    var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) {
        n0 = 0;
    } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) {
        n1 = 0;
    } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) {
        n2 = 0;
    } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) {
        n3 = 0;
    } else {
        t3 *= t3;
        n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    } // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);
}; // ##### Perlin noise stuff
// 2D Perlin Noise
var perlin2 = function perlin2(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y); // Get relative xy coordinates of point within that cell
    x = x - X;
    y = y - Y; // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255; // Calculate noise contributions from each of the four corners
    var n00 = gradP[X + perm[Y]].dot2(x, y);
    var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
    var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
    var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1); // Compute the fade curve value for x
    var u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(x); // Interpolate the four results
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(n00, n10, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(n01, n11, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(y));
}; // 3D Perlin Noise
var perlin3 = function perlin3(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z); // Get relative xyz coordinates of point within that cell
    x = x - X;
    y = y - Y;
    z = z - Z; // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255;
    Z = Z & 255; // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
    var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
    var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
    var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
    var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
    var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
    var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
    var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1); // Compute the fade curve value for x, y, z
    var u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(x);
    var v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(y);
    var w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(z); // Interpolate
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(n000, n100, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(n001, n101, u), w), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(n010, n110, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(n011, n111, u), w), v);
};
var noise = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    seed: seed,
    simplex2: simplex2,
    simplex3: simplex3,
    perlin2: perlin2,
    perlin3: perlin3
});
var TAU = Math.PI * 2; // Credits @kchapelier https://github.com/kchapelier/wavefunctioncollapse/blob/master/example/lcg.js#L22-L30
function normalizeSeed(seed) {
    if (typeof seed === "number") {
        seed = Math.abs(seed);
    } else if (typeof seed === "string") {
        var string = seed;
        seed = 0;
        for(var i = 0; i < string.length; i++){
            seed = (seed + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
        }
    }
    if (seed === 0) {
        seed = 311;
    }
    return seed;
}
function lcgRandom(seed) {
    var state = normalizeSeed(seed);
    return function() {
        var result = state * 48271 % 2147483647;
        state = result;
        return result / 2147483647;
    };
}
var Generator = function Generator(_seed) {
    var _this = this;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Generator);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "seed", 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "init", function(seed) {
        _this.seed = seed;
        _this.value = lcgRandom(seed);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "value", lcgRandom(this.seed));
    this.init(_seed);
};
var defaultGen = new Generator(Math.random());
/***
 * [3D] Sphere
 */ var defaultSphere = {
    radius: 1,
    center: [
        0,
        0,
        0
    ]
}; // random on surface of sphere
// - https://twitter.com/fermatslibrary/status/1430932503578226688
// - https://mathworld.wolfram.com/SpherePointPicking.html
function onSphere(buffer, sphere) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultSphere$sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultSphere), sphere), radius = _defaultSphere$sphere.radius, center = _defaultSphere$sphere.center;
    for(var i = 0; i < buffer.length; i += 3){
        var u = rng.value();
        var v = rng.value();
        var theta = Math.acos(2 * v - 1);
        var phi = TAU * u;
        buffer[i] = Math.sin(theta) * Math.cos(phi) * radius + center[0];
        buffer[i + 1] = Math.sin(theta) * Math.sin(phi) * radius + center[1];
        buffer[i + 2] = Math.cos(theta) * radius + center[2];
    }
    return buffer;
} // from "Another Method" https://datagenetics.com/blog/january32020/index.html
function inSphere(buffer, sphere) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultSphere$sphere2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultSphere), sphere), radius = _defaultSphere$sphere2.radius, center = _defaultSphere$sphere2.center;
    for(var i = 0; i < buffer.length; i += 3){
        var u = Math.pow(rng.value(), 1 / 3);
        var x = rng.value() * 2 - 1;
        var y = rng.value() * 2 - 1;
        var z = rng.value() * 2 - 1;
        var mag = Math.sqrt(x * x + y * y + z * z);
        x = u * x / mag;
        y = u * y / mag;
        z = u * z / mag;
        buffer[i] = x * radius + center[0];
        buffer[i + 1] = y * radius + center[1];
        buffer[i + 2] = z * radius + center[2];
    }
    return buffer;
}
/***
 * [2D] Circle
 */ var defaultCircle = {
    radius: 1,
    center: [
        0,
        0
    ]
}; // random circle https://stackoverflow.com/a/50746409
function inCircle(buffer, circle) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultCircle$circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultCircle), circle), radius = _defaultCircle$circle.radius, center = _defaultCircle$circle.center;
    for(var i = 0; i < buffer.length; i += 2){
        var r = radius * Math.sqrt(rng.value());
        var theta = rng.value() * TAU;
        buffer[i] = Math.sin(theta) * r + center[0];
        buffer[i + 1] = Math.cos(theta) * r + center[1];
    }
    return buffer;
}
function onCircle(buffer, circle) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultCircle$circle2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultCircle), circle), radius = _defaultCircle$circle2.radius, center = _defaultCircle$circle2.center;
    for(var i = 0; i < buffer.length; i += 2){
        var theta = rng.value() * TAU;
        buffer[i] = Math.sin(theta) * radius + center[0];
        buffer[i + 1] = Math.cos(theta) * radius + center[1];
    }
    return buffer;
}
/**
 * [2D] Plane
 */ var defaultRect = {
    sides: 1,
    center: [
        0,
        0
    ]
};
function inRect(buffer, rect) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultRect$rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultRect), rect), sides = _defaultRect$rect.sides, center = _defaultRect$rect.center;
    var sideX = typeof sides === "number" ? sides : sides[0];
    var sideY = typeof sides === "number" ? sides : sides[1];
    for(var i = 0; i < buffer.length; i += 2){
        buffer[i] = (rng.value() - 0.5) * sideX + center[0];
        buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
    }
    return buffer;
}
function onRect(buffer, rect) {
    return buffer;
}
/***
 * [3D] Box
 */ function inBox(buffer, box) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultBox$box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultBox), box), sides = _defaultBox$box.sides, center = _defaultBox$box.center;
    var sideX = typeof sides === "number" ? sides : sides[0];
    var sideY = typeof sides === "number" ? sides : sides[1];
    var sideZ = typeof sides === "number" ? sides : sides[2];
    for(var i = 0; i < buffer.length; i += 3){
        buffer[i] = (rng.value() - 0.5) * sideX + center[0];
        buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
        buffer[i + 2] = (rng.value() - 0.5) * sideZ + center[2];
    }
    return buffer;
}
var defaultBox = {
    sides: 1,
    center: [
        0,
        0,
        0
    ]
};
function onBox(buffer, box) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultBox$box2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultBox), box), sides = _defaultBox$box2.sides, center = _defaultBox$box2.center;
    var sideX = typeof sides === "number" ? sides : sides[0];
    var sideY = typeof sides === "number" ? sides : sides[1];
    var sideZ = typeof sides === "number" ? sides : sides[2];
    for(var i = 0; i < buffer.length; i += 3){
        buffer[i] = (rng.value() - 0.5) * sideX + center[0];
        buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
        buffer[i + 2] = (rng.value() - 0.5) * sideZ + center[2];
    }
    return buffer;
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Generator: Generator,
    onSphere: onSphere,
    inSphere: inSphere,
    inCircle: inCircle,
    onCircle: onCircle,
    inRect: inRect,
    onRect: onRect,
    inBox: inBox,
    onBox: onBox,
    noise: noise
});
;
}),
"[project]/node_modules/maath/random/dist/maath-random.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$index$2d$43782085$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/index-43782085.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$misc$2d$7d870b3c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/misc-7d870b3c.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/triangle-b62b9067.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/matrix-baa530bf.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/maath/dist/index-43782085.esm.js [app-client] (ecmascript) <export a as inSphere>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inSphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$index$2d$43782085$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$maath$2f$dist$2f$index$2d$43782085$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/maath/dist/index-43782085.esm.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_11906793._.js.map