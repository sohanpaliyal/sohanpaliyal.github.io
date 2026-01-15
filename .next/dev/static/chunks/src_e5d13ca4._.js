(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fadeIn",
    ()=>fadeIn,
    "slideIn",
    ()=>slideIn,
    "staggerContainer",
    ()=>staggerContainer,
    "textVariant",
    ()=>textVariant,
    "zoomIn",
    ()=>zoomIn
]);
const textVariant = (delay)=>{
    return {
        hidden: {
            y: -50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay || 0
            }
        }
    };
};
const fadeIn = (direction, type, delay, duration)=>{
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    };
};
const zoomIn = (delay, duration)=>{
    return {
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    };
};
const slideIn = (direction, type, delay, duration)=>{
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    };
};
const staggerContainer = (staggerChildren, delayChildren)=>{
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren || 0,
                delayChildren: delayChildren || 0
            }
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/styles.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Section = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "0a88b346febe1fa92bd0c2d3a42bc43ae499ec888463bc499288f23403b9ac40") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a88b346febe1fa92bd0c2d3a42bc43ae499ec888463bc499288f23403b9ac40";
    }
    const { children, idName, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])();
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            once: true,
            amount: 0.25
        };
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].padding} max-w-7xl mx-auto relative z-0 ${className}`;
    let t5;
    if ($[3] !== idName) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hash-span",
            id: idName,
            children: " "
        }, void 0, false, {
            fileName: "[project]/src/components/ui/section.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = idName;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== children || $[6] !== t4 || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            variants: t2,
            initial: "hidden",
            whileInView: "show",
            viewport: t3,
            className: t4,
            children: [
                t5,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/section.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = children;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
};
_c = Section;
const __TURBOPACK__default__export__ = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/tech/mui.svg.mjs { IMAGE => \"[project]/src/assets/tech/mui.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript) <export default as mui>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mui",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/tech/mui.svg.mjs { IMAGE => "[project]/src/assets/tech/mui.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
}),
"[project]/src/assets/tech/firebase.svg.mjs { IMAGE => \"[project]/src/assets/tech/firebase.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript) <export default as firebase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/tech/firebase.svg.mjs { IMAGE => "[project]/src/assets/tech/firebase.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
}),
"[project]/src/assets/tech/framer.svg.mjs { IMAGE => \"[project]/src/assets/tech/framer.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript) <export default as framer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "framer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/tech/framer.svg.mjs { IMAGE => "[project]/src/assets/tech/framer.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
}),
"[project]/src/assets/tech/rxjs.svg.mjs { IMAGE => \"[project]/src/assets/tech/rxjs.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript) <export default as rxjs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rxjs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/tech/rxjs.svg.mjs { IMAGE => "[project]/src/assets/tech/rxjs.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
}),
"[project]/src/utils/tech-icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTechIcon",
    ()=>getTechIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/assets/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$html$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$html$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__html$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/html.png.mjs { IMAGE => "[project]/src/assets/tech/html.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as html>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$css$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$css$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__css$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/css.png.mjs { IMAGE => "[project]/src/assets/tech/css.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as css>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$javascript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$javascript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__javascript$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/javascript.png.mjs { IMAGE => "[project]/src/assets/tech/javascript.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as javascript>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$typescript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$typescript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__typescript$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/typescript.png.mjs { IMAGE => "[project]/src/assets/tech/typescript.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as typescript>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$reactjs$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$reactjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__reactjs$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/reactjs.png.mjs { IMAGE => "[project]/src/assets/tech/reactjs.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as reactjs>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$redux$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$redux$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__redux$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/redux.png.mjs { IMAGE => "[project]/src/assets/tech/redux.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as redux>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$tailwind$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$tailwind$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__tailwind$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/tailwind.png.mjs { IMAGE => "[project]/src/assets/tech/tailwind.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as tailwind>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$git$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$git$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__git$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/git.png.mjs { IMAGE => "[project]/src/assets/tech/git.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as git>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$figma$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$figma$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__figma$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/figma.png.mjs { IMAGE => "[project]/src/assets/tech/figma.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as figma>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$angular$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$angular$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__angular$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/angular.svg.mjs { IMAGE => "[project]/src/assets/tech/angular.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as angular>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__mui$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/mui.svg.mjs { IMAGE => "[project]/src/assets/tech/mui.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as mui>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__firebase$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/firebase.svg.mjs { IMAGE => "[project]/src/assets/tech/firebase.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as firebase>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__framer$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/framer.svg.mjs { IMAGE => "[project]/src/assets/tech/framer.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as framer>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__rxjs$3e$__ = __turbopack_context__.i('[project]/src/assets/tech/rxjs.svg.mjs { IMAGE => "[project]/src/assets/tech/rxjs.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as rxjs>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
;
;
const getTechIcon = (name)=>{
    const lowerName = name.toLowerCase();
    // Mapping for assets
    if (lowerName.includes("react")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$reactjs$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$reactjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__reactjs$3e$__["reactjs"]
    };
    if (lowerName.includes("html")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$html$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$html$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__html$3e$__["html"]
    };
    if (lowerName.includes("css")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$css$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$css$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__css$3e$__["css"]
    };
    if (lowerName.includes("javascript")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$javascript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$javascript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__javascript$3e$__["javascript"]
    };
    if (lowerName.includes("typescript")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$typescript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$typescript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__typescript$3e$__["typescript"]
    };
    if (lowerName.includes("angular")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$angular$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$angular$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__angular$3e$__["angular"]
    };
    if (lowerName.includes("redux")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$redux$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$redux$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__redux$3e$__["redux"]
    };
    if (lowerName.includes("tailwind")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$tailwind$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$tailwind$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__tailwind$3e$__["tailwind"]
    };
    if (lowerName.includes("git")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$git$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$git$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__git$3e$__["git"]
    };
    if (lowerName.includes("figma")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$figma$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$figma$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__figma$3e$__["figma"]
    };
    if (lowerName.includes("mui") || lowerName.includes("material")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$mui$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__mui$3e$__["mui"]
    };
    if (lowerName.includes("firebase")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$firebase$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__firebase$3e$__["firebase"]
    };
    if (lowerName.includes("framer")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$framer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__framer$3e$__["framer"]
    };
    if (lowerName.includes("rxjs")) return {
        type: "image",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$tech$2f$rxjs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__rxjs$3e$__["rxjs"]
    };
    // Fallbacks for abstract concepts using Lucide
    if (lowerName.includes("web-dev")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"]
    };
    if (lowerName.includes("backend")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
    };
    if (lowerName.includes("db") || lowerName.includes("database")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
    };
    if (lowerName.includes("performance")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
    };
    if (lowerName.includes("optimization")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    };
    if (lowerName.includes("architecture") || lowerName.includes("system")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    };
    if (lowerName.includes("concepts")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
    };
    if (lowerName.includes("layer") || lowerName.includes("stack")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
    };
    if (lowerName.includes("storage")) return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"]
    };
    // Default
    return {
        type: "lucide",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"]
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/blog-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$parallax$2d$tilt$2f$dist$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-parallax-tilt/dist/modern/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tech$2d$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/tech-icons.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const BlogCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "40b24cab005e8ffacc0ed66864abc746481401d345043dec7eb3efc5f2bbf59d") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40b24cab005e8ffacc0ed66864abc746481401d345043dec7eb3efc5f2bbf59d";
    }
    const { index, id, title, subtitle, date, tags, image } = t0;
    const t1 = index * 0.5;
    let t2;
    if ($[1] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"])("up", "spring", t1, 0.75);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = `/blog/${id}`;
    let t4;
    if ($[3] !== image || $[4] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-[230px] overflow-hidden rounded-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: title,
                fill: true,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/blog-card.tsx",
                lineNumber: 44,
                columnNumber: 81
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = image;
        $[4] = title;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== date) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-secondary text-[14px] font-medium",
            children: date
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = date;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white-100 font-bold text-[24px] mt-2 group-hover:text-[#915EFF] transition-colors",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = title;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== subtitle) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-secondary text-[14px] line-clamp-3",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = subtitle;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t5 || $[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex-1",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== id || $[17] !== tags) {
        let t10;
        if ($[19] !== id) {
            t10 = (tag)=>{
                const { type, icon: Icon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tech$2d$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechIcon"])(tag.name);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group/tag",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full bg-black-200/50 p-1.5 flex justify-center items-center border border-white/5 hover:border-white/20 transition-colors",
                            children: type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: Icon,
                                alt: tag.name,
                                width: 20,
                                height: 20,
                                className: "object-contain w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/blog-card.tsx",
                                lineNumber: 94,
                                columnNumber: 253
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 16,
                                className: "text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/blog-card.tsx",
                                lineNumber: 94,
                                columnNumber: 362
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/blog-card.tsx",
                            lineNumber: 94,
                            columnNumber: 78
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black-100 text-white text-[10px] rounded opacity-0 group-hover/tag:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 border border-white/10",
                            children: tag.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/blog-card.tsx",
                            lineNumber: 94,
                            columnNumber: 414
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `${id}-${tag.name}`, true, {
                    fileName: "[project]/src/components/ui/blog-card.tsx",
                    lineNumber: 94,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[19] = id;
            $[20] = t10;
        } else {
            t10 = $[20];
        }
        t9 = tags.map(t10);
        $[16] = id;
        $[17] = tags;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-wrap gap-3",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t3 || $[25] !== t4 || $[26] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$parallax$2d$tilt$2f$dist$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            tiltMaxAngleX: 3,
            tiltMaxAngleY: 3,
            scale: 1.02,
            transitionSpeed: 450,
            className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col group",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t3,
                className: "flex flex-col h-full",
                children: [
                    t4,
                    t8,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/blog-card.tsx",
                lineNumber: 118,
                columnNumber: 175
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t10;
        $[24] = t3;
        $[25] = t4;
        $[26] = t8;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11 || $[29] !== t2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t2,
            className: "w-full h-full",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/blog-card.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t11;
        $[29] = t2;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    return t12;
};
_c = BlogCard;
const __TURBOPACK__default__export__ = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e5d13ca4._.js.map