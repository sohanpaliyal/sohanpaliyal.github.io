(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/ball.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Decal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Preload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Ball = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "788cb43b54ac363194f2d14b919b59c39e43e67f29aca3da25a31b6d03ff3880") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "788cb43b54ac363194f2d14b919b59c39e43e67f29aca3da25a31b6d03ff3880";
    }
    const imgUrl = typeof props.imgUrl === "string" ? props.imgUrl : props.imgUrl?.src || props.imgUrl;
    const decal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])(imgUrl);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
            intensity: 0.25
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
            position: [
                0,
                0,
                0.05
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
            args: [
                1,
                1
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: "#fff8eb",
            polygonOffset: true,
            polygonOffsetFactor: -5,
            flatShading: true
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            0,
            0,
            1
        ];
        t5 = [
            2 * Math.PI,
            0,
            6.25
        ];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    const t6 = decal;
    let t7;
    if ($[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
            speed: 1.75,
            rotationIntensity: 1,
            floatIntensity: 2,
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    castShadow: true,
                    receiveShadow: true,
                    scale: 2.75,
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decal"], {
                            position: t4,
                            rotation: t5,
                            scale: 1,
                            map: t6
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ball.tsx",
                            lineNumber: 54,
                            columnNumber: 145
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/ball.tsx",
                    lineNumber: 54,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
};
_s(Ball, "lltc94ApbB+JMPkaASaOOpD8RcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"]
    ];
});
_c = Ball;
const BallCanvas = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "788cb43b54ac363194f2d14b919b59c39e43e67f29aca3da25a31b6d03ff3880") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "788cb43b54ac363194f2d14b919b59c39e43e67f29aca3da25a31b6d03ff3880";
    }
    const { icon } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            1,
            2
        ];
        t2 = {
            preserveDrawingBuffer: true
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
            enableZoom: false
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] !== icon) {
        t5 = icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ball, {
            imgUrl: icon
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 99,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = icon;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Preload"], {
            all: true
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            frameloop: "demand",
            dpr: t1,
            gl: t2,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/ball.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    return t8;
};
_c1 = BallCanvas;
const __TURBOPACK__default__export__ = BallCanvas;
var _c, _c1;
__turbopack_context__.k.register(_c, "Ball");
__turbopack_context__.k.register(_c1, "BallCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ball.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/ball.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export s as applyProps>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/three-stdlib/geometries/DecalGeometry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecalGeometry",
    ()=>DecalGeometry,
    "DecalVertex",
    ()=>DecalVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
class DecalGeometry extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"] {
    constructor(mesh, position, orientation, size){
        super();
        const vertices = [];
        const normals = [];
        const uvs = [];
        const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const projectorMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
        projectorMatrix.makeRotationFromEuler(orientation);
        projectorMatrix.setPosition(position);
        const projectorMatrixInverse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
        projectorMatrixInverse.copy(projectorMatrix).invert();
        generate();
        this.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](vertices, 3));
        this.setAttribute("normal", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](normals, 3));
        this.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
        function generate() {
            let i;
            let decalVertices = [];
            const vertex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            if (mesh.geometry.isGeometry === true) {
                console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");
                return;
            }
            const geometry = mesh.geometry;
            const positionAttribute = geometry.attributes.position;
            const normalAttribute = geometry.attributes.normal;
            if (geometry.index !== null) {
                const index = geometry.index;
                for(i = 0; i < index.count; i++){
                    vertex.fromBufferAttribute(positionAttribute, index.getX(i));
                    normal.fromBufferAttribute(normalAttribute, index.getX(i));
                    pushDecalVertex(decalVertices, vertex, normal);
                }
            } else {
                for(i = 0; i < positionAttribute.count; i++){
                    vertex.fromBufferAttribute(positionAttribute, i);
                    normal.fromBufferAttribute(normalAttribute, i);
                    pushDecalVertex(decalVertices, vertex, normal);
                }
            }
            decalVertices = clipGeometry(decalVertices, plane.set(1, 0, 0));
            decalVertices = clipGeometry(decalVertices, plane.set(-1, 0, 0));
            decalVertices = clipGeometry(decalVertices, plane.set(0, 1, 0));
            decalVertices = clipGeometry(decalVertices, plane.set(0, -1, 0));
            decalVertices = clipGeometry(decalVertices, plane.set(0, 0, 1));
            decalVertices = clipGeometry(decalVertices, plane.set(0, 0, -1));
            for(i = 0; i < decalVertices.length; i++){
                const decalVertex = decalVertices[i];
                uvs.push(0.5 + decalVertex.position.x / size.x, 0.5 + decalVertex.position.y / size.y);
                decalVertex.position.applyMatrix4(projectorMatrix);
                vertices.push(decalVertex.position.x, decalVertex.position.y, decalVertex.position.z);
                normals.push(decalVertex.normal.x, decalVertex.normal.y, decalVertex.normal.z);
            }
        }
        function pushDecalVertex(decalVertices, vertex, normal) {
            vertex.applyMatrix4(mesh.matrixWorld);
            vertex.applyMatrix4(projectorMatrixInverse);
            normal.transformDirection(mesh.matrixWorld);
            decalVertices.push(new DecalVertex(vertex.clone(), normal.clone()));
        }
        function clipGeometry(inVertices, plane2) {
            const outVertices = [];
            const s = 0.5 * Math.abs(size.dot(plane2));
            for(let i = 0; i < inVertices.length; i += 3){
                let v1Out, v2Out, v3Out, total = 0;
                let nV1, nV2, nV3, nV4;
                const d1 = inVertices[i + 0].position.dot(plane2) - s;
                const d2 = inVertices[i + 1].position.dot(plane2) - s;
                const d3 = inVertices[i + 2].position.dot(plane2) - s;
                v1Out = d1 > 0;
                v2Out = d2 > 0;
                v3Out = d3 > 0;
                total = (v1Out ? 1 : 0) + (v2Out ? 1 : 0) + (v3Out ? 1 : 0);
                switch(total){
                    case 0:
                        {
                            outVertices.push(inVertices[i]);
                            outVertices.push(inVertices[i + 1]);
                            outVertices.push(inVertices[i + 2]);
                            break;
                        }
                    case 1:
                        {
                            if (v1Out) {
                                nV1 = inVertices[i + 1];
                                nV2 = inVertices[i + 2];
                                nV3 = clip(inVertices[i], nV1, plane2, s);
                                nV4 = clip(inVertices[i], nV2, plane2, s);
                            }
                            if (v2Out) {
                                nV1 = inVertices[i];
                                nV2 = inVertices[i + 2];
                                nV3 = clip(inVertices[i + 1], nV1, plane2, s);
                                nV4 = clip(inVertices[i + 1], nV2, plane2, s);
                                outVertices.push(nV3);
                                outVertices.push(nV2.clone());
                                outVertices.push(nV1.clone());
                                outVertices.push(nV2.clone());
                                outVertices.push(nV3.clone());
                                outVertices.push(nV4);
                                break;
                            }
                            if (v3Out) {
                                nV1 = inVertices[i];
                                nV2 = inVertices[i + 1];
                                nV3 = clip(inVertices[i + 2], nV1, plane2, s);
                                nV4 = clip(inVertices[i + 2], nV2, plane2, s);
                            }
                            outVertices.push(nV1.clone());
                            outVertices.push(nV2.clone());
                            outVertices.push(nV3);
                            outVertices.push(nV4);
                            outVertices.push(nV3.clone());
                            outVertices.push(nV2.clone());
                            break;
                        }
                    case 2:
                        {
                            if (!v1Out) {
                                nV1 = inVertices[i].clone();
                                nV2 = clip(nV1, inVertices[i + 1], plane2, s);
                                nV3 = clip(nV1, inVertices[i + 2], plane2, s);
                                outVertices.push(nV1);
                                outVertices.push(nV2);
                                outVertices.push(nV3);
                            }
                            if (!v2Out) {
                                nV1 = inVertices[i + 1].clone();
                                nV2 = clip(nV1, inVertices[i + 2], plane2, s);
                                nV3 = clip(nV1, inVertices[i], plane2, s);
                                outVertices.push(nV1);
                                outVertices.push(nV2);
                                outVertices.push(nV3);
                            }
                            if (!v3Out) {
                                nV1 = inVertices[i + 2].clone();
                                nV2 = clip(nV1, inVertices[i], plane2, s);
                                nV3 = clip(nV1, inVertices[i + 1], plane2, s);
                                outVertices.push(nV1);
                                outVertices.push(nV2);
                                outVertices.push(nV3);
                            }
                            break;
                        }
                }
            }
            return outVertices;
        }
        function clip(v0, v1, p, s) {
            const d0 = v0.position.dot(p) - s;
            const d1 = v1.position.dot(p) - s;
            const s0 = d0 / (d0 - d1);
            const v = new DecalVertex(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](v0.position.x + s0 * (v1.position.x - v0.position.x), v0.position.y + s0 * (v1.position.y - v0.position.y), v0.position.z + s0 * (v1.position.z - v0.position.z)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](v0.normal.x + s0 * (v1.normal.x - v0.normal.x), v0.normal.y + s0 * (v1.normal.y - v0.normal.y), v0.normal.z + s0 * (v1.normal.z - v0.normal.z)));
            return v;
        }
    }
}
class DecalVertex {
    constructor(position, normal){
        this.position = position;
        this.normal = normal;
    }
    clone() {
        return new this.constructor(this.position.clone(), this.normal.clone());
    }
}
;
 //# sourceMappingURL=DecalGeometry.js.map
}),
"[project]/node_modules/@react-three/drei/core/Decal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Decal",
    ()=>Decal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export s as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$geometries$2f$DecalGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/geometries/DecalGeometry.js [app-client] (ecmascript)");
;
;
;
;
;
function isArray(vec) {
    return Array.isArray(vec);
}
function vecToArray(vec = [
    0,
    0,
    0
]) {
    if (isArray(vec)) {
        return vec;
    } else if (vec instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] || vec instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"]) {
        return [
            vec.x,
            vec.y,
            vec.z
        ];
    } else {
        return [
            vec,
            vec,
            vec
        ];
    }
}
const Decal = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Decal({ debug, depthTest = false, polygonOffsetFactor = -10, map, mesh, children, position, rotation, scale, ...props }, forwardRef) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardRef, {
        "Decal.Decal.useImperativeHandle": ()=>ref.current
    }["Decal.Decal.useImperativeHandle"]);
    const helper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
        rotation: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](),
        scale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Decal.Decal.useLayoutEffect": ()=>{
            const parent = (mesh == null ? void 0 : mesh.current) || ref.current.parent;
            const target = ref.current;
            if (!(parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"])) {
                throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');
            }
            if (parent) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(state.current, {
                    position,
                    scale
                });
                // Zero out the parents matrix world for this operation
                const matrixWorld = parent.matrixWorld.clone();
                parent.matrixWorld.identity();
                if (!rotation || typeof rotation === 'number') {
                    const o = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
                    o.position.copy(state.current.position);
                    // Thanks https://x.com/N8Programs !
                    const vertices = parent.geometry.attributes.position.array;
                    if (parent.geometry.attributes.normal === undefined) parent.geometry.computeVertexNormals();
                    const normal = parent.geometry.attributes.normal.array;
                    let distance = Infinity;
                    let closestNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                    const ox = o.position.x;
                    const oy = o.position.y;
                    const oz = o.position.z;
                    const vLength = vertices.length;
                    let chosenIdx = -1;
                    for(let i = 0; i < vLength; i += 3){
                        const x = vertices[i];
                        const y = vertices[i + 1];
                        const z = vertices[i + 2];
                        const xDiff = x - ox;
                        const yDiff = y - oy;
                        const zDiff = z - oz;
                        const distSquared = xDiff * xDiff + yDiff * yDiff + zDiff * zDiff;
                        if (distSquared < distance) {
                            distance = distSquared;
                            chosenIdx = i;
                        }
                    }
                    closestNormal.fromArray(normal, chosenIdx);
                    // Get vector tangent to normal
                    o.lookAt(o.position.clone().add(closestNormal));
                    o.rotateZ(Math.PI);
                    o.rotateY(Math.PI);
                    if (typeof rotation === 'number') o.rotateZ(rotation);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(state.current, {
                        rotation: o.rotation
                    });
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(state.current, {
                        rotation
                    });
                }
                if (helper.current) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(helper.current, state.current);
                }
                target.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$geometries$2f$DecalGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecalGeometry"](parent, state.current.position, state.current.rotation, state.current.scale);
                // Reset parents matix-world
                parent.matrixWorld = matrixWorld;
                return ({
                    "Decal.Decal.useLayoutEffect": ()=>{
                        target.geometry.dispose();
                    }
                })["Decal.Decal.useLayoutEffect"];
            }
        }
    }["Decal.Decal.useLayoutEffect"], [
        mesh,
        ...vecToArray(position),
        ...vecToArray(scale),
        ...vecToArray(rotation)
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Decal.Decal.useLayoutEffect": ()=>{
            if (helper.current) {
                // Prevent the helpers from blocking rays
                helper.current.traverse({
                    "Decal.Decal.useLayoutEffect": (child)=>child.raycast = ({
                            "Decal.Decal.useLayoutEffect": ()=>null
                        })["Decal.Decal.useLayoutEffect"]
                }["Decal.Decal.useLayoutEffect"]);
            }
        }
    }["Decal.Decal.useLayoutEffect"], [
        debug
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        "material-transparent": true,
        "material-polygonOffset": true,
        "material-polygonOffsetFactor": polygonOffsetFactor,
        "material-depthTest": depthTest,
        "material-map": map
    }, props), children, debug && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        ref: helper
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("boxGeometry", null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshNormalMaterial", {
        wireframe: true
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("axesHelper", null)));
});
;
}),
"[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Float",
    ()=>Float
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
const Float = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, enabled = true, speed = 1, rotationIntensity = 1, floatIntensity = 1, floatingRange = [
    -0.1,
    0.1
], autoInvalidate = false, ...props }, forwardRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardRef, {
        "Float.useImperativeHandle": ()=>ref.current
    }["Float.useImperativeHandle"], []);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](Math.random() * 10000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Float.useFrame": (state)=>{
            var _floatingRange$, _floatingRange$2;
            if (!enabled || speed === 0) return;
            if (autoInvalidate) state.invalidate();
            const t = offset.current + state.clock.elapsedTime;
            ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
            let yPosition = Math.sin(t / 4 * speed) / 10;
            yPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].mapLinear(yPosition, -0.1, 0.1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -0.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : 0.1);
            ref.current.position.y = yPosition * floatIntensity;
            ref.current.updateMatrix();
        }
    }["Float.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: ref,
        matrixAutoUpdate: false
    }, children));
});
;
}),
"[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsObject",
    ()=>IsObject,
    "Texture",
    ()=>Texture,
    "useTexture",
    ()=>useTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export G as useLoader>");
;
;
;
;
const IsObject = (url)=>url === Object(url) && !Array.isArray(url) && typeof url !== 'function';
function useTexture(input, onLoad) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useTexture.useThree[gl]": (state)=>state.gl
    }["useTexture.useThree[gl]"]);
    const textures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], IsObject(input) ? Object.values(input) : input);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useTexture.useLayoutEffect": ()=>{
            onLoad == null || onLoad(textures);
        }
    }["useTexture.useLayoutEffect"], [
        onLoad
    ]);
    // https://github.com/mrdoob/three.js/issues/22696
    // Upload the texture to the GPU immediately instead of waiting for the first render
    // NOTE: only available for WebGLRenderer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTexture.useEffect": ()=>{
            if ('initTexture' in gl) {
                let textureArray = [];
                if (Array.isArray(textures)) {
                    textureArray = textures;
                } else if (textures instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]) {
                    textureArray = [
                        textures
                    ];
                } else if (IsObject(textures)) {
                    textureArray = Object.values(textures);
                }
                textureArray.forEach({
                    "useTexture.useEffect": (texture)=>{
                        if (texture instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]) {
                            gl.initTexture(texture);
                        }
                    }
                }["useTexture.useEffect"]);
            }
        }
    }["useTexture.useEffect"], [
        gl,
        textures
    ]);
    const mappedTextures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTexture.useMemo[mappedTextures]": ()=>{
            if (IsObject(input)) {
                const keyed = {};
                let i = 0;
                for(const key in input)keyed[key] = textures[i++];
                return keyed;
            } else {
                return textures;
            }
        }
    }["useTexture.useMemo[mappedTextures]"], [
        input,
        textures
    ]);
    return mappedTextures;
}
useTexture.preload = (url)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].preload(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], url);
useTexture.clear = (input)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].clear(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], input);
//
const Texture = ({ children, input, onLoad })=>{
    const ret = useTexture(input, onLoad);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(ret));
};
;
}),
]);

//# sourceMappingURL=_109fbef8._.js.map