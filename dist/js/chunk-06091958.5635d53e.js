(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06091958"],{"0310":function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return B}));var i=r("bd75"),n=r("17ca"),a=r("d272"),o=r("4db9"),s=r("d539"),c=r("c332"),l=r("b09a"),d=r("6cb2"),u=r("dfaf"),f=r("6d5b"),h=r("7d11"),p=r("17b0"),m=r("7e21"),v=r("d047"),b=r("0d7a"),g=r("7088"),x=r("ea4b"),y=r("c6d7"),T=r("aab5"),_=r("5d5f"),O=r("a7d7"),S=r("d017"),w=r("be24"),M=r("ebd5"),C=r("d56e"),A=r("3626"),E=r("3886"),P=r("690a");function B(e){const t=new P["a"],r=t.vertex.code,B=t.fragment.code;return t.include(C["a"],{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l["a"]),t.varyings.add("vpos","vec3"),t.include(w["a"],e),t.include(s["a"],e),t.include(p["a"],e),0!==e.output&&7!==e.output||(t.include(c["a"],e),t.include(o["a"],{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(n["a"]),t.include(b["a"],e),t.include(h["a"],e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u["a"],e),t.include(i["a"],e),t.include(d["a"],e),t.include(f["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(E["a"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${E["a"].float(M["c"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?E["a"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a["a"],e),t.include(M["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(v["a"]),t.include(y["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A["a"]),B.add(E["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?E["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?E["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a["a"],e),t.include(x["a"],e),t.include(g["a"],e),t.include(M["a"],e),e.receiveShadows&&t.include(S["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(v["a"]),t.include(y["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O["a"],e),t.include(_["a"],e),t.fragment.include(A["a"]),t.include(T["a"],e),B.add(E["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?E["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E["a"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?E["a"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:E["a"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?E["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?E["a"]`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?E["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:E["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:E["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?E["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(m["a"],e),t}const F=Object.freeze({__proto__:null,build:B})},"0d7a":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("7cb4"),n=r("3886");function a(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(n["a"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n["a"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(n["a"]`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(i["a"],t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(n["a"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},"17b0":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r("3886");r("7c51");function n(e){e.vertex.code.add(i["a"]`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(i["a"]`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(i["a"]`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(i["a"]`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(i["a"]`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(i["a"]`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(i["a"]`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(n),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i["a"]`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i["a"]`vec3 worldNormal = normalize(worldPos + localOrigin);`:i["a"]`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i["a"]`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i["a"]`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i["a"]`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function o(e,t,r){if(!t.verticalOffset)return;const i=s(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}function s(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},"17ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e){e.vertex.code.add(i["a"]`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},"189c":function(e,t,r){"use strict";function i(e,t,r=32774,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function n(e,t,r,i,n=32774,a=32774,o=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return i}));const a={face:1029,mode:2305},o={face:1028,mode:2305},s=e=>2===e?a:1===e?o:null,c={zNear:0,zFar:1},l={r:!0,g:!0,b:!0,a:!0};function d(e){return T.intern(e)}function u(e){return O.intern(e)}function f(e){return w.intern(e)}function h(e){return C.intern(e)}function p(e){return E.intern(e)}function m(e){return B.intern(e)}function v(e){return j.intern(e)}function b(e){return L.intern(e)}function g(e){return z.intern(e)}class x{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function y(e){return"["+e.join(",")+"]"}const T=new x(_,e=>({__tag:"Blending",...e}));function _(e){return e?y([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const O=new x(S,e=>({__tag:"Culling",...e}));function S(e){return e?y([e.face,e.mode]):null}const w=new x(M,e=>({__tag:"PolygonOffset",...e}));function M(e){return e?y([e.factor,e.units]):null}const C=new x(A,e=>({__tag:"DepthTest",...e}));function A(e){return e?y([e.func]):null}const E=new x(P,e=>({__tag:"StencilTest",...e}));function P(e){return e?y([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const B=new x(F,e=>({__tag:"DepthWrite",...e}));function F(e){return e?y([e.zNear,e.zFar]):null}const j=new x(I,e=>({__tag:"ColorWrite",...e}));function I(e){return e?y([e.r,e.g,e.b,e.a]):null}const L=new x(D,e=>({__tag:"StencilWrite",...e}));function D(e){return e?y([e.mask]):null}const z=new x(R,e=>({blending:d(e.blending),culling:u(e.culling),polygonOffset:f(e.polygonOffset),depthTest:h(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:m(e.depthWrite),colorWrite:v(e.colorWrite),stencilWrite:b(e.stencilWrite)}));function R(e){return e?y([_(e.blending),S(e.culling),M(e.polygonOffset),A(e.depthTest),P(e.stencilTest),F(e.depthWrite),I(e.colorWrite),D(e.stencilWrite)]):null}class N{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this.setBlending(e.blending),this.setCulling(e.culling),this.setPolygonOffset(e.polygonOffset),this.setDepthTest(e.depthTest),this.setStencilTest(e.stencilTest),this.setDepthWrite(e.depthWrite),this.setColorWrite(e.colorWrite),this.setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(e){this._blending=this.setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(e){this._culling=this.setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(e){this._polygonOffset=this.setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(e){this._depthTest=this.setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(e){this._stencilTest=this.setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(e){this._depthWrite=this.setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(e){this._colorWrite=this.setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(e){this._stencilWrite=this.setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}},1956:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d}));var i=r("ce50"),n=r("c120"),a=r("e92d");const o=a["a"].getLogger("esri/views/webgl");function s(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const c=!!Object(n["a"])("enable-feature:webgl-debug");function l(){return c}function d(){return c}function u(e){if(l()){const t=e.getError();if(t){const r=s(e,t),n=(new Error).stack;o.error(new i["a"]("webgl-error","WebGL error occured",{message:r,stack:n}))}}}},"2db0":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("2eab");async function n(e,t){const{data:r}=await Object(i["default"])(e,{responseType:"image",...t});return r}},3626:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("3886");function n(e){e.code.add(i["a"]`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(n),e.code.add(i["a"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i["a"].int(1)}) {
        return allMixed;
      }
      else if (mode == ${i["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i["a"].int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i["a"].int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},3886:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r}(i||(i={}))},"47f8":function(e,t,r){"use strict";function i(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(e,t){return new Float32Array(e,t,3)}function s(){return i()}function c(){return a(1,1,1)}function l(){return a(1,0,0)}function d(){return a(0,1,0)}function u(){return a(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const f=s(),h=c(),p=l(),m=d(),v=u();Object.freeze({__proto__:null,create:i,clone:n,fromValues:a,createView:o,zeros:s,ones:c,unitX:l,unitY:d,unitZ:u,ZEROS:f,ONES:h,UNIT_X:p,UNIT_Y:m,UNIT_Z:v})},"4c96":function(e,t,r){"use strict";function i(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,o=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*o;for(let d=0;d<s;++d)i[c]=a[l],i[c+1]=a[l+1],i[c+2]=a[l+2],c+=n,l+=o}function n(e,t,r,i,n){var a,o;const s=e.typedBuffer,c=e.typedBufferStride,l=null!=(a=null==n?void 0:n.count)?a:e.count;let d=(null!=(o=null==n?void 0:n.dstIndex)?o:0)*c;for(let u=0;u<l;++u)s[d]=t,s[d+1]=r,s[d+2]=i,d+=c}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));Object.freeze({__proto__:null,copy:i,fill:n})},"4db9":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e,t){t.linearDepth?e.vertex.code.add(i["a"]`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i["a"]`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},"501b":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e){e.code.add(i["a"]`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},"5d5f":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("3886");function n(e){const t=e.fragment.code;t.add(i["a"]`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i["a"]`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i["a"]`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var a=r("c51b");function o(e,t){const r=e.fragment.code;e.include(a["a"]),3===t.pbrMode||4===t.pbrMode?(r.add(i["a"]`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i["a"]`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i["a"]`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i["a"]`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i["a"]`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(n),r.add(i["a"]`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i["a"]`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i["a"]`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i["a"]`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i["a"]`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i["a"]`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},6415:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("e92d");const n=i["a"].getLogger("esri.views.3d.support.buffer.math")},"668b":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return n}));var i=r("6415");function n(e,t,r){if(e.count!==t.count)return void i["a"].error("source and destination buffers need to have the same number of elements");const n=e.count,a=r[0],o=r[1],s=r[2],c=r[4],l=r[5],d=r[6],u=r[8],f=r[9],h=r[10],p=r[12],m=r[13],v=r[14],b=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,y=t.typedBufferStride;for(let i=0;i<n;i++){const e=i*g,t=i*y,r=x[t],n=x[t+1],T=x[t+2];b[e]=a*r+c*n+u*T+p,b[e+1]=o*r+l*n+f*T+m,b[e+2]=s*r+d*n+h*T+v}}function a(e,t,r){if(e.count!==t.count)return void i["a"].error("source and destination buffers need to have the same number of elements");const n=e.count,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],f=r[7],h=r[8],p=e.typedBuffer,m=e.typedBufferStride,v=t.typedBuffer,b=t.typedBufferStride;for(let i=0;i<n;i++){const e=i*m,t=i*b,r=v[t],n=v[t+1],g=v[t+2];p[e]=a*r+c*n+u*g,p[e+1]=o*r+l*n+f*g,p[e+2]=s*r+d*n+h*g}}function o(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,a=e.typedBufferStride,o=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*a,t=c*s;n[e]=r*o[t],n[e+1]=r*o[t+1],n[e+2]=r*o[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,o=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*o,r=a[t],c=a[t+1],l=a[t+2],d=Math.sqrt(r*r+c*c+l*l);if(d>0){const t=1/d;i[e]=t*r,i[e+1]=t*c,i[e+2]=t*l}}}function c(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,a=e.typedBufferStride,o=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*a,t=c*s;n[e]=o[t]>>r,n[e+1]=o[t+1]>>r,n[e+2]=o[t+2]>>r}}Object.freeze({__proto__:null,transformMat4:n,transformMat3:a,scale:o,normalize:s,shiftRight:c})},"690a":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("e92d");const n=i["a"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class a{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&n.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends a{constructor(){super(...arguments),this.vertex=new l,this.fragment=new l,this.attributes=new d,this.varyings=new u,this.extensions=new f,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,a=n.uniforms.generateSource(),o=n.code.generateSource(),s="vertex"===e?m:p,c=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${o.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map(t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class c{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class l extends a{constructor(){super(...arguments),this.uniforms=new s,this.code=new c,this.constants=new h}get builder(){return this}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class f{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?f.ALLOWLIST_VERTEX:f.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}f.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],f.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=h.numberToFloatStr(r);break;case"int":i=h.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])},                            ${h.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])},                             ${h.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>h.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const p="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},"6a07":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r("0fc4"),n=r("3886");const a=Object(i["d"])(1,1,0,1),o=Object(i["d"])(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(n["a"]`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},"6a21":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r("c120"),n=r("3886");function a({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n["a"]`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n["a"]`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function o(e){return!!Object(i["a"])("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},"6cb2":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("3886");function n(e){e.vertex.code.add(i["a"]`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i["a"].int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i["a"].int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i["a"].int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i["a"].int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function a(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i["a"]`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(i["a"]`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},"6d5b":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i["a"]`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i["a"]`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i["a"]`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},7088:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i["a"]`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i["a"]`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},7438:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return d}));var i=r("189c");const n=Object(i["f"])(770,1,771,771),a=Object(i["g"])(1,1),o=Object(i["g"])(0,771);function s(e){return 2===e?null:1===e?o:a}const c=5e5,l={factor:-1,units:-2};function d(e){return e?l:null}function u(e){return 3===e||2===e?513:515}},"7c51":function(e,t,r){"use strict";r.d(t,"a",(function(){return B})),r.d(t,"b",(function(){return L})),r.d(t,"c",(function(){return F})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return P}));var i=r("38a4"),n=r("b2b2"),a=r("e431"),o=r("0b2d"),s=r("4261");function c(e){return Math.abs(e*e*e)}function l(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return h.scale=Math.min(i.divisor/(t-i.offset),1),h.factor=c(e),h.minPixelSize=i.minPixelSize,h.paddingPixels=n,h}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function u(e,t){return Math.max(Object(i["k"])(e*t.scale,e,t.factor),d(e,t))}function f(e,t,r,i){return u(e,l(t,r,i))}Object(i["g"])(10),Object(i["g"])(12),Object(i["g"])(70),Object(i["g"])(40);const h={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var p=r("1153"),m=(r("d791"),r("afe1"));r("9cc4");function v(e){return!!Object(n["k"])(e)&&!e.visible}new Float64Array(3),new Float32Array(6),Object(m["d"])();const b=Object(s["b"])();function g(e,t,r,i,n,a,o){if(!v(t))if(e.boundingInfo){Object(p["a"])(0===e.primitiveType);const t=r.tolerance;y(e.boundingInfo,i,n,t,a,o)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");_(i,n,0,t.length/3,t,r,void 0,a,o)}}const x=Object(o["e"])();function y(e,t,r,i,a,o){if(Object(n["j"])(e))return;const c=C(t,r,x);if(Object(s["l"])(b,e.getBBMin()),Object(s["k"])(b,e.getBBMax()),Object(n["k"])(a)&&a.applyToAabb(b),A(b,t,c,i)){const{primitiveIndices:n,indices:s,position:c}=e,l=n?n.length:s.length/3;if(l>D){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&y(n[e],t,r,i,a,o);return}}_(t,r,0,l,s,c,n,a,o)}}const T=Object(o["e"])();function _(e,t,r,i,a,o,s,c,l){if(s)return O(e,t,r,i,a,o,s,c,l);const d=o.data,u=o.stride||o.size,f=e[0],h=e[1],p=e[2],m=t[0]-f,v=t[1]-h,b=t[2]-p;for(let g=r,x=3*r;g<i;++g){let e=u*a[x++],t=d[e++],r=d[e++],i=d[e];e=u*a[x++];let o=d[e++],s=d[e++],y=d[e];e=u*a[x++];let _=d[e++],O=d[e++],S=d[e];Object(n["k"])(c)&&([t,r,i]=c.applyToVertex(t,r,i,g),[o,s,y]=c.applyToVertex(o,s,y,g),[_,O,S]=c.applyToVertex(_,O,S,g));const w=o-t,C=s-r,A=y-i,E=_-t,P=O-r,B=S-i,F=v*B-P*b,j=b*E-B*m,I=m*P-E*v,L=w*F+C*j+A*I;if(Math.abs(L)<=Number.EPSILON)continue;const D=f-t,z=h-r,R=p-i,N=D*F+z*j+R*I;if(L>0){if(N<0||N>L)continue}else if(N>0||N<L)continue;const V=z*A-C*R,k=R*w-A*D,H=D*C-w*z,U=m*V+v*k+b*H;if(L>0){if(U<0||N+U>L)continue}else if(U>0||N+U<L)continue;const W=(E*V+P*k+B*H)/L;W>=0&&l(W,M(w,C,A,E,P,B,T),g,!1)}}function O(e,t,r,i,a,o,s,c,l){const d=o.data,u=o.stride||o.size,f=e[0],h=e[1],p=e[2],m=t[0]-f,v=t[1]-h,b=t[2]-p;for(let g=r;g<i;++g){const e=s[g];let t=3*e,r=u*a[t++],i=d[r++],o=d[r++],x=d[r];r=u*a[t++];let y=d[r++],_=d[r++],O=d[r];r=u*a[t];let S=d[r++],w=d[r++],C=d[r];Object(n["k"])(c)&&([i,o,x]=c.applyToVertex(i,o,x,g),[y,_,O]=c.applyToVertex(y,_,O,g),[S,w,C]=c.applyToVertex(S,w,C,g));const A=y-i,E=_-o,P=O-x,B=S-i,F=w-o,j=C-x,I=v*j-F*b,L=b*B-j*m,D=m*F-B*v,z=A*I+E*L+P*D;if(Math.abs(z)<=Number.EPSILON)continue;const R=f-i,N=h-o,V=p-x,k=R*I+N*L+V*D;if(z>0){if(k<0||k>z)continue}else if(k>0||k<z)continue;const H=N*P-E*V,U=V*A-P*R,W=R*E-A*N,G=m*H+v*U+b*W;if(z>0){if(G<0||k+G>z)continue}else if(G>0||k+G<z)continue;const $=(B*H+F*U+j*W)/z;$>=0&&l($,M(A,E,P,B,F,j,T),e,!1)}}const S=Object(o["e"])(),w=Object(o["e"])();function M(e,t,r,i,n,o,s){return Object(a["t"])(S,e,t,r),Object(a["t"])(w,i,n,o),Object(a["d"])(s,S,w),Object(a["o"])(s,s),s}function C(e,t,r){return Object(a["t"])(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function A(e,t,r,i){return E(e,t,r,i,1/0)}function E(e,t,r,i,n){const a=(e[0]-i-t[0])*r[0],o=(e[3]+i-t[0])*r[0];let s=Math.min(a,o),c=Math.max(a,o);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(s=Math.max(s,Math.min(u,f)),!(s>c)&&s<n)}function P(e,t,r,n,a){let o=(r.screenLength||0)*e.pixelRatio;a&&(o=f(o,n,t,a));const s=o*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(i["e"])(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function B(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function F(e,t){const r=t?F(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=I(t)),null==t&&i in r||(r[i]=t)}return r}function j(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function I(e){const t=[];return e.forEach(e=>t.push(e)),t}const L={multiply:1,ignore:2,replace:3,tint:4},D=1e3},"7cb4":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("dfaf"),n=r("3886");function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n["a"]`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function o(e,t){e.include(i["a"],t),e.fragment.code.add(n["a"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(n["a"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(a),e.fragment.code.add(n["a"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},"7d11":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r("c332"),n=r("dae5"),a=r("afe1"),o=r("0b2d"),s=r("b09a"),c=r("6a21"),l=r("3886");function d(e,t){e.include(s["a"]),e.vertex.include(c["a"],t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l["a"]`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(l["a"]`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function u(e,t){0===t.normalType||1===t.normalType?(e.include(i["a"],t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(l["a"]`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l["a"]`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?l["a"]`normalize(vPositionWorldCameraRelative);`:l["a"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(l["a"]`void forwardNormal() {}`)}!function(e){class t{constructor(){this.worldFromModel_RS=Object(n["b"])(),this.worldFromModel_TH=Object(o["e"])(),this.worldFromModel_TL=Object(o["e"])()}}e.ModelTransform=t;class r{constructor(){this.worldFromView_TH=Object(o["e"])(),this.worldFromView_TL=Object(o["e"])(),this.viewFromCameraRelative_RS=Object(n["b"])(),this.projFromView=Object(a["d"])()}}function i(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)}function s(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}e.ViewProjectionTransform=r,e.bindModelTransform=i,e.bindViewProjTransform=s}(d||(d={})),function(e){function t(e,t){e.setUniformMatrix4fv("viewNormal",t)}e.bindUniforms=t}(u||(u={}))},"7e21":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r("d272"),n=r("4db9"),a=r("c332"),o=r("dfaf"),s=r("7d11"),c=r("501b"),l=r("3886");function d(e,t){e.fragment.include(c["a"]),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(l["a"]`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(l["a"]`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var u=r("6a07"),f=r("be24"),h=r("ebd5");function p(e,t){const r=e.vertex.code,c=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n["a"],{linearDepth:!0}),e.include(o["a"],t),e.include(f["a"],t),e.include(d,t),e.include(i["a"],t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(l["a"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(h["a"],t),c.add(l["a"]`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?l["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n["a"],{linearDepth:!1}),e.include(a["a"],t),e.include(s["a"],t),e.include(o["a"],t),e.include(f["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(l["a"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?l["a"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i["a"],t),e.include(h["a"],t),c.add(l["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?l["a"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:l["a"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n["a"],{linearDepth:!1}),e.include(o["a"],t),e.include(f["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(l["a"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i["a"],t),e.include(h["a"],t),e.include(u["a"]),c.add(l["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},8190:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return V})),r.d(t,"d",(function(){return W})),r.d(t,"e",(function(){return D})),r.d(t,"f",(function(){return v})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return g})),r.d(t,"i",(function(){return x})),r.d(t,"j",(function(){return A})),r.d(t,"k",(function(){return F})),r.d(t,"l",(function(){return S})),r.d(t,"m",(function(){return h})),r.d(t,"n",(function(){return T})),r.d(t,"o",(function(){return k})),r.d(t,"p",(function(){return G})),r.d(t,"q",(function(){return z})),r.d(t,"r",(function(){return E})),r.d(t,"s",(function(){return j})),r.d(t,"t",(function(){return w})),r.d(t,"u",(function(){return p})),r.d(t,"v",(function(){return _})),r.d(t,"w",(function(){return H})),r.d(t,"x",(function(){return $})),r.d(t,"y",(function(){return R})),r.d(t,"z",(function(){return P})),r.d(t,"A",(function(){return I})),r.d(t,"B",(function(){return M})),r.d(t,"C",(function(){return m})),r.d(t,"D",(function(){return O})),r.d(t,"E",(function(){return U})),r.d(t,"F",(function(){return q})),r.d(t,"G",(function(){return N})),r.d(t,"H",(function(){return B})),r.d(t,"I",(function(){return L})),r.d(t,"J",(function(){return C}));class i{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=9;const a=this.TypedArrayConstructor;void 0===i&&(i=9*a.BYTES_PER_ELEMENT);const o=0===t.byteLength?0:r;this.typedBuffer=null==n?new a(t,o):new a(t,o,(n-r)/a.BYTES_PER_ELEMENT),this.typedBufferStride=i/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const i=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,i,this.stride,i+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let i=0;i<9;i++)t[i]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let i=0;i<9;i++)this.typedBuffer[r++]=t[i]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer;let a=e*this.typedBufferStride,o=r*t.typedBufferStride;for(let s=0;s<9;++s)i[a++]=n[o++]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=9;class n{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=16;const a=this.TypedArrayConstructor;void 0===i&&(i=16*a.BYTES_PER_ELEMENT);const o=0===t.byteLength?0:r;this.typedBuffer=null==n?new a(t,o):new a(t,o,(n-r)/a.BYTES_PER_ELEMENT),this.typedBufferStride=i/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const i=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,i,this.stride,i+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let i=0;i<16;i++)t[i]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let i=0;i<16;i++)this.typedBuffer[r++]=t[i]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer;let a=e*this.typedBufferStride,o=r*t.typedBufferStride;for(let s=0;s<16;++s)i[a++]=n[o++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class a{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=1;const a=this.TypedArrayConstructor;void 0===i&&(i=a.BYTES_PER_ELEMENT);const o=0===t.byteLength?0:r;this.typedBuffer=null==n?new a(t,o):new a(t,o,(n-r)/a.BYTES_PER_ELEMENT),this.typedBufferStride=i/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const i=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,i,this.stride,i+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=1;var o=r("3349");class s{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=2;const a=this.TypedArrayConstructor;void 0===i&&(i=2*a.BYTES_PER_ELEMENT);const o=0===t.byteLength?0:r;this.typedBuffer=null==n?new a(t,o):new a(t,o,(n-r)/a.BYTES_PER_ELEMENT),this.typedBufferStride=i/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const i=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,i,this.stride,i+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(o["p"])(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer;let a=e*this.typedBufferStride,o=r*t.typedBufferStride;i[a++]=n[o++],i[a]=n[o]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=2;var c=r("e431");class l{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=3;const a=this.TypedArrayConstructor;void 0===i&&(i=3*a.BYTES_PER_ELEMENT);const o=0===t.byteLength?0:r;this.typedBuffer=null==n?new a(t,o):new a(t,o,(n-r)/a.BYTES_PER_ELEMENT),this.typedBufferStride=i/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const i=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,i,this.stride,i+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(c["t"])(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,i){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=i}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer;let a=e*this.typedBufferStride,o=r*t.typedBufferStride;i[a++]=n[o++],i[a++]=n[o++],i[a]=n[o]}get buffer(){return this.typedBuffer.buffer}}l.ElementCount=3;var d=r("7577");class u{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=4;const a=this.TypedArrayConstructor;void 0===i&&(i=4*a.BYTES_PER_ELEMENT);const o=0===t.byteLength?0:r;this.typedBuffer=null==n?new a(t,o):new a(t,o,(n-r)/a.BYTES_PER_ELEMENT),this.typedBufferStride=i/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const i=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,i,this.stride,i+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(d["k"])(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,i,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=i,this.typedBuffer[e]=n}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer;let a=e*this.typedBufferStride,o=r*t.typedBufferStride;i[a++]=n[o++],i[a++]=n[o++],i[a++]=n[o++],i[a]=n[o]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=4;class f extends a{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new f(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}f.ElementType="f32";class h extends s{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends l{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class m extends u{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f32";class v extends i{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="f32";class b extends i{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class g extends n{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f32";class x extends n{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="f64";class y extends a{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}slice(e,t){return this.sliceBuffer(y,e,t)}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f64";class T extends s{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class _ extends l{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="f64";class O extends u{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends a{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class w extends s{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class M extends l{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class C extends u{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u8";class A extends a{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u16";class E extends s{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class P extends l{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class B extends u{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="u16";class F extends a{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class j extends s{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="u32";class I extends l{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class L extends u{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u32";class D extends a{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i8";class z extends s{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i8";class R extends l{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="i8";class N extends u{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="i8";class V extends a{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class k extends s{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class H extends l{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i16";class U extends u{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class W extends a{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class G extends s{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class $ extends l{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32";class q extends u{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32"},"94a6":function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return hr})),r.d(t,"gltfToEngineResources",(function(){return mr})),r.d(t,"parseUrl",(function(){return pr}));var i=r("49b8"),n=r("b2b2"),a=r("1c92"),o=r("dae5"),s=r("d791"),c=r("afe1"),l=r("e431"),d=r("0b2d"),u=r("4261"),f=r("8190"),h=r("668b"),p=r("e4c1"),m=r("7e2d"),v=r("2b60"),b=r("3c3b"),g=r("087c"),x=r("2eab"),y=r("792b"),T=r("ce50"),_=r("e92d"),O=r("f4cc"),S=r("549a"),w=r("2db0"),M=r("8a44"),C=r("1153");class A{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(d["e"])(),Object(C["a"])(e.length>=1),Object(C["a"])(r.length%this._numIndexPerPrimitive==0),Object(C["a"])(r.length>=e.length*this._numIndexPerPrimitive),Object(C["a"])(3===i.size||4===i.size);const{data:n,size:a}=i,o=e.length;let s=a*r[this._numIndexPerPrimitive*e[0]];E.clear(),E.push(s),this.bbMin=Object(d["g"])(n[s],n[s+1],n[s+2]),this.bbMax=Object(d["c"])(this.bbMin);for(let l=0;l<o;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*r[t+e],E.push(s);let i=n[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=n[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=n[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(l["f"])(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<E.length;++l){s=E.getItemAt(l);const e=n[s]-this.center[0],t=n[s+1]-this.center[1],r=n[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=c)continue;const a=Math.sqrt(i),o=.5*(a-this.radius);this.radius=this.radius+o,c=this.radius*this.radius;const d=o/a;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=r*d}E.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(l["i"])(this.bbMin,this.bbMax)>1){const e=Object(l["f"])(Object(d["e"])(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:n,size:a}=this.position;for(let c=0;c<t;++c){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=a*this.indices[o],l=n[s],d=n[s+1],u=n[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=a*this.indices[o+e];const t=n[s],r=n[s+1],i=n[s+2];t<l&&(l=t),r<d&&(d=r),i<u&&(u=i)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[c]=t,++i[t]}let o=0;for(let c=0;c<8;++c)i[c]>0&&++o;if(o<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<t;++c){const e=r[c];s[e][i[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new A(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){E.prune()}}const E=new M["a"]({deallocator:null});var P=r("f2e0");class B{constructor(){this.id=Object(P["a"])()}unload(){}}var F=r("1038");class j extends B{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,a]of e)a&&this._vertexAttributes.set(n,{...a});if(null==t||0===t.length){const e=I(this._vertexAttributes),t=Object(F["c"])(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[n,a]of t)a&&(this._indices.set(n,L(a)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(n["j"])(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(F["b"])(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(F["a"])(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(C["a"])(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Object(F["c"])(e.length/t),i=this.vertexAttributes.get("position");return new A(r,t,e,i)}}function I(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function L(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var D=r("6c97"),z=r("ce6d"),R=r("38a4"),N=r("a21b"),V=r("e041"),k=r("228a"),H=r("b2cd");function U(){if(Object(n["j"])(W)){const e=e=>Object(H["a"])("esri/libs/basisu/"+e);W=r.e("chunk-0d0331bd").then(r.bind(null,"a58f")).then(e=>e.b).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return W}let W;var G=r("a1ff"),$=r("8539");let q=null,X=null;async function Y(){return Object(n["j"])(X)&&(X=U(),q=await X),X}function K(e,t){if(Object(n["j"])(q))return e.byteLength;const r=new q.BasisFile(new Uint8Array(e)),i=Q(r)?Z(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function J(e,t){if(Object(n["j"])(q))return e.byteLength;const r=new q.KTX2File(new Uint8Array(e)),i=ee(r)?Z(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function Z(e,t,r,i,n){const a=Object($["b"])(t?37496:37492),o=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*o)}function Q(e){return e.getNumImages()>=1&&!e.isUASTC()}function ee(e){return e.getFaces()>=1&&e.isETC1S()}async function te(e,t,r){Object(n["j"])(q)&&(q=await Y());const i=new q.BasisFile(new Uint8Array(r));if(!Q(i))return null;i.startTranscoding();const a=ie(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(e,t)=>i.getImageTranscodedSizeInBytes(0,e,t),(e,t,r)=>i.transcodeImage(r,0,e,t,0,0));return i.close(),i.delete(),a}async function re(e,t,r){Object(n["j"])(q)&&(q=await Y());const i=new q.KTX2File(new Uint8Array(r));if(!ee(i))return null;i.startTranscoding();const a=ie(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1));return i.close(),i.delete(),a}function ie(e,t,r,i,n,a,o,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],f=t.hasMipmap?r:Math.min(1,r),h=[];for(let b=0;b<f;b++)h.push(new Uint8Array(o(b,d))),s(b,d,h[b]);const p=h.length>1,m=p?9987:9729,v={...t,samplingMode:m,hasMipmap:p,internalFormat:u,width:n,height:a};return new G["a"](e,v,{type:"compressed",levels:h})}const ne=_["a"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ae=542327876,oe=131072,se=4;function ce(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function le(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const de=ce("DXT1"),ue=ce("DXT3"),fe=ce("DXT5"),he=31,pe=0,me=1,ve=2,be=3,ge=4,xe=7,ye=20,Te=21;function _e(e,t,r){const{textureData:i,internalFormat:n,width:a,height:o}=Oe(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=o,new G["a"](e,t,i)}function Oe(e,t){const r=new Int32Array(e,0,he);if(r[pe]!==ae)return ne.error("Invalid magic number in DDS header"),null;if(!(r[ye]&se))return ne.error("Unsupported format, must contain a FourCC code"),null;const i=r[Te];let n,a;switch(i){case de:n=8,a=33776;break;case ue:n=16,a=33778;break;case fe:n=16,a=33779;break;default:return ne.error("Unsupported FourCC code:",le(i)),null}let o=1,s=r[ge],c=r[be];0==(3&s)&&0==(3&c)||(ne.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,d=c;let u,f;r[ve]&oe&&!1!==t&&(o=Math.max(1,r[xe])),1===o||Object(R["j"])(s)&&Object(R["j"])(c)||(ne.warn("Ignoring mipmaps of non power of two sized compressed texture."),o=1);let h=r[me]+4;const p=[];for(let m=0;m<o;++m)f=(s+3>>2)*(c+3>>2)*n,u=new Uint8Array(e,h,f),p.push(u),h+=f,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:l,height:d}}const Se=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),we=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Me=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var Ce=r("7ce4"),Ae=r("0fa6");function Ee(e,t=we,r=Se,i=-1,n=1){let a=null;return a=t===Me?new Float32Array([i,i,0,0,n,i,1,0,i,n,0,1,n,n,1,1]):new Float32Array([i,i,n,i,i,n,n,n]),new Ae["a"](e,r,{geometry:t},{geometry:Ce["a"].createVertex(e,35044,a)})}var Pe=r("d267"),Be=r("c514");class Fe extends B{constructor(e,t){super(),this.data=e,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new z["a"],this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Fe.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(n["j"])(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(V["t"])(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(V["u"])(e.src)||Object(V["t"])(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(n["j"])(e))return 0;if(Object(N["c"])(e)||Object(N["k"])(e))return t.encoding===Fe.KTX2_ENCODING?J(e,t.mipmap):t.encoding===Fe.BASIS_ENCODING?K(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Fe.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if(Object(n["k"])(this._glTexture))return this._glTexture;if(Object(n["k"])(this._loadingPromise))return this._loadingPromise;const r=this.data;return Object(n["j"])(r)?(this._glTexture=new G["a"](e,this.createDescriptor(e),null),this._glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(N["c"])(r)||Object(N["k"])(r))&&this.params.encoding===Fe.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(N["c"])(r)||Object(N["k"])(r))&&this.params.encoding===Fe.KTX2_ENCODING?this.loadFromKTX2(e,r):(Object(N["c"])(r)||Object(N["k"])(r))&&this.params.encoding===Fe.BASIS_ENCODING?this.loadFromBasis(e,r):Object(N["k"])(r)?this.loadFromPixelData(e,r):Object(N["c"])(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(n["j"])(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(n["k"])(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,i,n,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this._glTexture=_e(e,this.createDescriptor(e),t),this._glTexture}loadFromKTX2(e,t){return this.loadAsync(()=>re(e,this.createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}loadFromBasis(e,t){return this.loadAsync(()=>te(e,this.createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}loadFromPixelData(e,t){Object(C["a"])(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new G["a"](e,r,t),this._glTexture}loadFromURL(e,t,r){return this.loadAsync(async i=>{const n=await Object(w["a"])(r,{signal:i});return this.loadFromImage(e,n,t)})}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync(async i=>{const n=await Object(k["a"])(r,r.src,!1,i);return this.loadFromImage(e,n,t)})}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(i=>new Promise((a,o)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Object(n["q"])(d)},c=()=>{r.readyState>=2&&(s(),a(this.loadFromImage(e,r,t)))},l=e=>{s(),o(e||new T["a"]("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=Object(O["p"])(i,()=>l(Object(O["d"])()))}))}loadFromImage(e,t,r){const i=Fe.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||Object(R["j"])(i.width)&&Object(R["j"])(i.height)?(n.width=i.width,n.height=i.height,this._glTexture=new G["a"](e,n,t),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),this._glTexture)}loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(Be["a"])(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,n){const{width:a,height:o}=r,s=Object(R["l"])(a),c=Object(R["l"])(o);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/s,o/c],l=new G["a"](e,i),l.updateData(0,0,0,a,o,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,n());break;default:Object(D["a"])(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const n=new G["a"](e,r),a=new Pe["a"](e,{colorTarget:0,depthStencilTarget:0},n),o=new G["a"](e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=Ee(e),c=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,i,a,s,o,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:o,framebuffer:a}:(s.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(c),n}drawStretchedTexture(e,t,r,i,n,a){e.bindFramebuffer(r);const o=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(n,"tex"),e.bindVAO(i),t.bindPipelineState(e),e.drawArrays(5,0,Object($["e"])(i,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height)}unload(){if(Object(n["k"])(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(Object(n["k"])(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),Object(n["k"])(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Fe.DDS_ENCODING="image/vnd-ms.dds",Fe.KTX2_ENCODING="image/ktx2",Fe.BASIS_ENCODING="image/x.basis";var je=r("fc00"),Ie=r("ebd5");class Le{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return 2}}class De extends Le{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then(e=>this._texture=e),this._acquire(e.normalTextureId).then(e=>this._textureNormal=e),this._acquire(e.emissiveTextureId).then(e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId).then(e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId).then(e=>this._textureMetallicRoughness=e)}dispose(){this._texture=Object(n["p"])(this._texture),this._textureNormal=Object(n["p"])(this._textureNormal),this._textureEmissive=Object(n["p"])(this._textureEmissive),this._textureOcclusion=Object(n["p"])(this._textureOcclusion),this._textureMetallicRoughness=Object(n["p"])(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(e){(Object(n["j"])(this._texture)||e!==this._texture.id)&&(this._texture=Object(n["p"])(this._texture),this._textureId=e,this._acquire(this._textureId).then(e=>this._texture=e))}bindTextures(e){Object(n["k"])(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(n["k"])(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(n["k"])(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(n["k"])(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(n["k"])(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(n["k"])(this._texture)?this._texture.glTexture:null;Object(n["k"])(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return Object(n["j"])(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).then(e=>this._disposed?(Object(n["p"])(e),null):e).finally(()=>--this._numLoading))}}var ze=r("7c51");class Re extends B{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Se,this._parameters=Object(ze["c"])(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Object(ze["e"])(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(n["k"])(this.repository)&&this.repository.materialChanged(this)}}const Ne={renderOccluded:1};var Ve=r("7438"),ke=r("04f0"),He=r("b139"),Ue=r("47f8"),We=r("0fc4"),Ge=r("f895");class $e{constructor(e=0){this.offset=e,this.tmpVertex=Object(d["e"])()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],a=r+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+n*n+a*a);return this.tmpVertex[0]=e+i*o,this.tmpVertex[1]=t+n*o,this.tmpVertex[2]=r+a*o,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],a=e[4]+this.localOrigin[1],o=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+a*a+o*o);return e[3]+=n*c,e[4]+=a*c,e[5]+=o*c,e}}class qe{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(d["e"])(),this.mbs=Object(We["b"])(),this.obb={center:Object(d["e"])(),halfSize:Object(Ue["a"])(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,a=r+this.componentLocalOriginLength,o=this.offset/Math.sqrt(i*i+n*n+a*a);return this.tmpVertex[0]=e+i*o,this.tmpVertex[1]=t+n*o,this.tmpVertex[2]=r+a*o,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],a=e[4],o=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+a*a+o*o);return e[3]+=n*c,e[4]+=a*c,e[5]+=o*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(l["r"])(this.obb.halfSize,e.halfSize,e.quaternion),Object(l["c"])(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(l["g"])(this.obb.halfSize,this.obb.halfSize,e.center),Object(ke["a"])(Je,e.quaternion),Object(l["r"])(this.obb.halfSize,this.obb.halfSize,Je),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}}class Xe{constructor(e=0){this.offset=e,this.sphere=Object(Ge["a"])(),this.tmpVertex=Object(d["e"])()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],o=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+a*a+o*o);n+=n*s,a+=a*s,o+=o*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*a+c[8]*o+c[12],this.tmpVertex[1]=c[1]*n+c[5]*a+c[9]*o+c[13],this.tmpVertex[2]=c[2]*n+c[6]*a+c[10]*o+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Ye=new Xe;function Ke(e){return Object(n["k"])(e)?(Ye.offset=e,Ye):null}new qe;new $e;const Je=Object(He["b"])();function Ze(e,t,r,i){const n=r.typedBuffer,a=r.typedBufferStride,o=e.length;i*=a;for(let s=0;s<o;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=a}}function Qe(e,t,r,i,n){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,null==n||1===n)for(let c=0;c<s;++c){const r=3*e[c];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=o}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=o}}function et(e,t,r,i,n=1){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,1===n)for(let c=0;c<s;++c){const r=4*e[c];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=o}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=o}}function tt(e,t,r,i,n,a=1){if(!r)return void Qe(e,t,i,n,a);const o=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],d=r[1],u=r[2],f=r[4],h=r[5],p=r[6],m=r[8],v=r[9],b=r[10],g=r[12],x=r[13],y=r[14];if(n*=s,1===a)for(let T=0;T<c;++T){const r=3*e[T],i=t[r],a=t[r+1],c=t[r+2];o[n]=l*i+f*a+m*c+g,o[n+1]=d*i+h*a+v*c+x,o[n+2]=u*i+p*a+b*c+y,n+=s}else for(let T=0;T<c;++T){const r=3*e[T],i=t[r],c=t[r+1],_=t[r+2],O=l*i+f*c+m*_+g,S=d*i+h*c+v*_+x,w=u*i+p*c+b*_+y;for(let e=0;e<a;++e)o[n]=O,o[n+1]=S,o[n+2]=w,n+=s}}function rt(e,t,r,i,n,a=1){if(!r)return void Qe(e,t,i,n,a);const o=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=o[0],f=o[1],h=o[2],p=o[4],m=o[5],v=o[6],b=o[8],g=o[9],x=o[10],y=!Object(s["g"])(o),T=1e-6,_=1-T;if(n*=l,1===a)for(let s=0;s<d;++s){const r=3*e[s],i=t[r],a=t[r+1],o=t[r+2];let d=u*i+p*a+b*o,O=f*i+m*a+g*o,S=h*i+v*a+x*o;if(y){const e=d*d+O*O+S*S;if(e<_&&e>T){const t=1/Math.sqrt(e);d*=t,O*=t,S*=t}}c[n+0]=d,c[n+1]=O,c[n+2]=S,n+=l}else for(let s=0;s<d;++s){const r=3*e[s],i=t[r],o=t[r+1],d=t[r+2];let O=u*i+p*o+b*d,S=f*i+m*o+g*d,w=h*i+v*o+x*d;if(y){const e=O*O+S*S+w*w;if(e<_&&e>T){const t=1/Math.sqrt(e);O*=t,S*=t,w*=t}}for(let e=0;e<a;++e)c[n+0]=O,c[n+1]=S,c[n+2]=w,n+=l}}function it(e,t,r,i,n,a=1){if(!r)return void et(e,t,i,n,a);const o=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=o[0],f=o[1],h=o[2],p=o[4],m=o[5],v=o[6],b=o[8],g=o[9],x=o[10],y=!Object(s["g"])(o),T=1e-6,_=1-T;if(n*=l,1===a)for(let s=0;s<d;++s){const r=4*e[s],i=t[r],a=t[r+1],o=t[r+2],d=t[r+3];let O=u*i+p*a+b*o,S=f*i+m*a+g*o,w=h*i+v*a+x*o;if(y){const e=O*O+S*S+w*w;if(e<_&&e>T){const t=1/Math.sqrt(e);O*=t,S*=t,w*=t}}c[n+0]=O,c[n+1]=S,c[n+2]=w,c[n+3]=d,n+=l}else for(let s=0;s<d;++s){const r=4*e[s],i=t[r],o=t[r+1],d=t[r+2],O=t[r+3];let S=u*i+p*o+b*d,w=f*i+m*o+g*d,M=h*i+v*o+x*d;if(y){const e=S*S+w*w+M*M;if(e<_&&e>T){const t=1/Math.sqrt(e);S*=t,w*=t,M*=t}}for(let e=0;e<a;++e)c[n+0]=S,c[n+1]=w,c[n+2]=M,c[n+3]=O,n+=l}}function nt(e,t,r,i,n,a=1){const o=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,1===a){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=255,n+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<a;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<a;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=255,n+=s}}function at(e,t,r,i,n,a){for(const o of t.fieldNames){const t=e.vertexAttributes.get(o),s=e.indices.get(o);if(t&&s)switch(o){case"position":{Object(C["a"])(3===t.size);const e=n.getField(o,f["u"]);e&&tt(s,t.data,r,e,a);break}case"normal":{Object(C["a"])(3===t.size);const e=n.getField(o,f["u"]);e&&rt(s,t.data,i,e,a);break}case"uv0":{Object(C["a"])(2===t.size);const e=n.getField(o,f["m"]);e&&Ze(s,t.data,e,a);break}case"color":{Object(C["a"])(3===t.size||4===t.size);const e=n.getField(o,f["J"]);e&&nt(s,t.data,t.size,e,a);break}case"symbolColor":{Object(C["a"])(3===t.size||4===t.size);const e=n.getField(o,f["J"]);e&&nt(s,t.data,t.size,e,a);break}case"tangent":{Object(C["a"])(4===t.size);const e=n.getField(o,f["C"]);e&&it(s,t.data,i,e,a);break}}}}var ot=r("a4ee"),st=r("d272"),ct=r("d539"),lt=r("17b0"),dt=r("6a07"),ut=r("c6d7"),ft=r("a7d7"),ht=r("d017"),pt=r("be24"),mt=r("6a21"),vt=r("970c");function bt(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}function gt(e,t){e.setUniformMatrix4fv("proj",t)}function xt(e,t,r){Object(s["a"])(yt,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",yt)}const yt=Object(vt["a"])();class Tt{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class _t{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=Object(n["f"])(this._program),this._pipeline=this._config=null}reload(e){Object(n["f"])(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,t){return this._pipeline}}class Ot{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function St(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,o=e.count||2,s=Math.ceil(Math.log2(o)),c=null!=(n=t._parameterBits)?n:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var wt=r("1956"),Mt=r("8e37");class Ct extends Mt["a"]{constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new M["a"]({deallocator:null}),this._fragmentUniforms=Object(wt["b"])()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(n["j"])(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),Object(n["k"])(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const At={mask:255},Et={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Pt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var Bt=r("0310"),Ft=r("189c");class jt extends _t{initializeProgram(e){const t=jt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(mt["b"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Ct(e.rctx,i,Se)}bindPass(e,t){var r,i;gt(this.program,t.camera.projectionMatrix);const n=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===n)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(ut["a"])(this.program,t)),7===n&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ze["b"][e.colorMixMode])),0===n?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ze["b"][e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(ft["b"])(this.program,e,this.configuration.isSchematic)):4===n&&Object(dt["b"])(this.program,t),Object(pt["b"])(this.program,e),Object(lt["b"])(this.program,e,t),Object(ze["a"])(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(d["g"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;xt(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&bt(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ct["a"].bindCustomOrigin(this.program,t),Object(st["b"])(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(ht["b"])(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,n=2===e;return Object(Ft["e"])({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Ve["e"]:Object(Ve["a"])(e),culling:It(r)&&Object(Ft["b"])(r.cullFace),depthTest:{func:Object(Ve["b"])(e)},depthWrite:i||n?r.writeDepth&&Ft["d"]:null,colorWrite:Ft["c"],stencilWrite:r.sceneHasOcludees?At:null,stencilTest:r.sceneHasOcludees?t?Pt:Et:null,polygonOffset:i||n?null:Object(Ve["f"])(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function It(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}jt.shader=new Tt(Bt["a"],()=>r.e("chunk-2d0cb6c5").then(r.bind(null,"4a35")));class Lt extends Ot{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(ot["a"])([St({count:8})],Lt.prototype,"output",void 0),Object(ot["a"])([St({count:4})],Lt.prototype,"alphaDiscardMode",void 0),Object(ot["a"])([St({count:3})],Lt.prototype,"doubleSidedMode",void 0),Object(ot["a"])([St()],Lt.prototype,"isSchematic",void 0),Object(ot["a"])([St()],Lt.prototype,"vertexColors",void 0),Object(ot["a"])([St()],Lt.prototype,"offsetBackfaces",void 0),Object(ot["a"])([St()],Lt.prototype,"symbolColors",void 0),Object(ot["a"])([St()],Lt.prototype,"vvSize",void 0),Object(ot["a"])([St()],Lt.prototype,"vvColor",void 0),Object(ot["a"])([St()],Lt.prototype,"verticalOffset",void 0),Object(ot["a"])([St()],Lt.prototype,"receiveShadows",void 0),Object(ot["a"])([St()],Lt.prototype,"slicePlaneEnabled",void 0),Object(ot["a"])([St()],Lt.prototype,"sliceHighlightDisabled",void 0),Object(ot["a"])([St()],Lt.prototype,"receiveAmbientOcclusion",void 0),Object(ot["a"])([St()],Lt.prototype,"screenSizePerspective",void 0),Object(ot["a"])([St()],Lt.prototype,"textureAlphaPremultiplied",void 0),Object(ot["a"])([St()],Lt.prototype,"hasColorTexture",void 0),Object(ot["a"])([St()],Lt.prototype,"usePBR",void 0),Object(ot["a"])([St()],Lt.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(ot["a"])([St()],Lt.prototype,"hasEmissionTexture",void 0),Object(ot["a"])([St()],Lt.prototype,"hasOcclusionTexture",void 0),Object(ot["a"])([St()],Lt.prototype,"hasNormalTexture",void 0),Object(ot["a"])([St()],Lt.prototype,"instanced",void 0),Object(ot["a"])([St()],Lt.prototype,"instancedColor",void 0),Object(ot["a"])([St()],Lt.prototype,"instancedDoublePrecision",void 0),Object(ot["a"])([St()],Lt.prototype,"vertexTangents",void 0),Object(ot["a"])([St()],Lt.prototype,"normalsTypeDerivate",void 0),Object(ot["a"])([St()],Lt.prototype,"writeDepth",void 0),Object(ot["a"])([St()],Lt.prototype,"sceneHasOcludees",void 0),Object(ot["a"])([St()],Lt.prototype,"transparent",void 0),Object(ot["a"])([St()],Lt.prototype,"enableOffset",void 0),Object(ot["a"])([St({count:3})],Lt.prototype,"cullFace",void 0),Object(ot["a"])([St({count:4})],Lt.prototype,"transparencyPassType",void 0),Object(ot["a"])([St()],Lt.prototype,"multipassTerrainEnabled",void 0),Object(ot["a"])([St()],Lt.prototype,"cullAboveGround",void 0);var Dt=r("b0ab");class zt extends jt{initializeProgram(e){const t=zt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(mt["b"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Ct(e.rctx,i,Se)}}zt.shader=new Tt(Dt["a"],()=>r.e("chunk-2d0ab897").then(r.bind(null,"1662")));class Rt extends Re{constructor(e){super(e,Vt),this.supportsEdges=!0,this.techniqueConfig=new Lt,this.vertexBufferLayout=Ht(this.parameters),this.instanceBufferLayout=e.instanced?Ut(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,o="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||a||i)?!!o||s:r?o?c:s:n||a||i?!!o||s:o?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Ve["c"]),this.techniqueConfig}intersect(e,t,r,i,n,a,o){if(null!==this.parameters.verticalOffset){const e=i.camera;Object(l["t"])(Yt,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=Object(l["o"])(qt,Yt);break;case 2:t=Object(l["h"])(qt,$t)}let o=0;if(null!==this.parameters.verticalOffset){const r=Object(l["g"])(Kt,Yt,e.eye),i=Object(l["m"])(r),n=Object(l["b"])(r,r,1/i);let a=null;this.parameters.screenSizePerspective&&(a=Object(l["e"])(t,n)),o+=Object(ze["f"])(e,i,this.parameters.verticalOffset,a,this.parameters.screenSizePerspective)}Object(l["b"])(t,t,o),Object(l["u"])(Xt,t,i.transform.inverseRotation),n=Object(l["g"])(Wt,n,Xt),a=Object(l["g"])(Gt,a,Xt)}Object(ze["d"])(e,t,i,n,a,Ke(i.verticalOffset),o)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new Nt(e):null}createBufferWriter(){return new kt(this.vertexBufferLayout,this.instanceBufferLayout)}}class Nt extends De{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?zt:jt,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Vt={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(o["b"])(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Ie["b"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Ne};class kt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){at(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}function Ht(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(je["a"])().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}function Ut(e){let t=Object(je["a"])();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const Wt=Object(d["e"])(),Gt=Object(d["e"])(),$t=Object(d["g"])(0,0,1),qt=Object(d["e"])(),Xt=Object(d["e"])(),Yt=Object(d["e"])(),Kt=Object(d["e"])(),Jt=_["a"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Zt(e,t){const r=await Qt(e,t);return{resource:r,textures:await ar(r.textureDefinitions,t)}}async function Qt(e,t){const r=Object(n["k"])(t)&&t.streamDataRequester;if(r)return er(e,r,t);const i=await Object(y["c"])(Object(x["default"])(e,Object(n["r"])(t)));if(!0===i.ok)return i.value.data;Object(O["t"])(i.error),tr(i.error)}async function er(e,t,r){const i=await Object(y["c"])(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(O["t"])(i.error),tr(i.error.details.url)}function tr(e){throw new T["a"]("","Request for object resource failed: "+e)}function rr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Jt.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Jt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Jt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Jt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Jt.warn("Indexed geometries must specify faces"),i=!1;break}default:Jt.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Jt.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const a in n)n[a].values||(Jt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function ir(e,t){const r=[],i=[],a=[],o=[],s=e.resource,c=S["a"].parse(s.version||"1.0","wosr");cr.validate(c);const l=s.model.name,u=s.model.geometries,f=s.materialDefinitions,h=e.textures;let p=0;const m=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!rr(e))continue;const s=sr(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const g=h&&h[s.texture];if(g&&!m.has(s.texture)){const{image:e,params:t}=g,r=new Fe(e,t);o.push(r),m.set(s.texture,r)}const x=m.get(s.texture),y=x?x.id:void 0;let T=a[s.material]?a[s.material][s.texture]:null;if(!T){const e=f[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=g&&g.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=g?or(g.alphaChannelUsage):void 0,c={ambient:Object(d["f"])(e.diffuse),diffuse:Object(d["f"])(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};Object(n["k"])(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),T=new Rt(c),a[s.material]||(a[s.material]={}),a[s.material][s.texture]=T}i.push(T);const _=new j(l,b);p+=b.position?b.position.length:0,r.push(_)}return{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:nr(r),numberOfVertices:p,lodThreshold:null}}function nr(e){const t=Object(u["c"])();return e.forEach(e=>{const r=e.boundingInfo;Object(n["k"])(r)&&(Object(u["g"])(t,r.getBBMin()),Object(u["g"])(t,r.getBBMax()))}),t}async function ar(e,t){const r=[];for(const o in e){const i=e[o],a=i.images[0].data;if(!a){Jt.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+a,c="/textureDefinitions/"+o,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==or(l)},u=Object(n["k"])(t)&&t.disableTextures?Promise.resolve(null):Object(w["a"])(s,t);r.push(u.then(e=>({refId:c,image:e,params:d,alphaChannelUsage:l})))}const i=await Promise.all(r),a={};for(const n of i)a[n.refId]=n;return a}function or(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function sr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const cr=new S["a"](1,2,"wosr");var lr=r("0613"),dr=r("dc56"),ur=r("1c20"),fr=r("4c96");async function hr(e,t){const r=pr(Object(i["a"])(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Zt(r.url,t)),i=ir(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(b["a"])(new v["a"](t.streamDataRequester),r.url,t,t.usePBR)),o=Object(n["i"])(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&Object(n["k"])(o)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&gr(a,o);const s=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},c={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=mr(a,s,c,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=mr(a,s,c,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const l=mr(a,s,c);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function pr(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function mr(e,t,r,i){const s=e.model,c=Object(o["b"])(),l=new Array,d=new Map,v=new Map;return s.lods.forEach((e,o)=>{if(void 0!==i&&o!==i)return;const b={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(n["k"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u["c"])()};l.push(b),e.parts.forEach(e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),o=s.materials.get(e.material),l=Object(n["k"])(e.attributes.texCoord0),g=Object(n["k"])(e.attributes.normal),x=vr(o.alphaMode);if(!d.has(i)){if(l){if(Object(n["k"])(o.textureColor)&&!v.has(o.textureColor)){const e=s.textures.get(o.textureColor),t={...e.parameters,preMultiplyAlpha:1!==x};v.set(o.textureColor,new Fe(e.data,t))}if(Object(n["k"])(o.textureNormal)&&!v.has(o.textureNormal)){const e=s.textures.get(o.textureNormal);v.set(o.textureNormal,new Fe(e.data,e.parameters))}if(Object(n["k"])(o.textureOcclusion)&&!v.has(o.textureOcclusion)){const e=s.textures.get(o.textureOcclusion);v.set(o.textureOcclusion,new Fe(e.data,e.parameters))}if(Object(n["k"])(o.textureEmissive)&&!v.has(o.textureEmissive)){const e=s.textures.get(o.textureEmissive);v.set(o.textureEmissive,new Fe(e.data,e.parameters))}if(Object(n["k"])(o.textureMetallicRoughness)&&!v.has(o.textureMetallicRoughness)){const e=s.textures.get(o.textureMetallicRoughness);v.set(o.textureMetallicRoughness,new Fe(e.data,e.parameters))}}const a=o.color[0]**(1/lr["a"]),c=o.color[1]**(1/lr["a"]),u=o.color[2]**(1/lr["a"]),f=o.emissiveFactor[0]**(1/lr["a"]),h=o.emissiveFactor[1]**(1/lr["a"]),p=o.emissiveFactor[2]**(1/lr["a"]),m=Object(n["k"])(o.textureColor)&&l?v.get(o.textureColor):null;d.set(i,new Rt({...t,transparent:0===x,textureAlphaMode:x,textureAlphaCutoff:o.alphaCutoff,diffuse:[a,c,u],ambient:[a,c,u],opacity:o.opacity,doubleSided:o.doubleSided,doubleSidedType:"winding-order",cullFace:o.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:g?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(n["k"])(m)?m.id:void 0,colorMixMode:o.colorMixMode,normalTextureId:Object(n["k"])(o.textureNormal)&&l?v.get(o.textureNormal).id:void 0,textureAlphaPremultiplied:Object(n["k"])(m)&&!!m.params.preMultiplyAlpha,occlusionTextureId:Object(n["k"])(o.textureOcclusion)&&l?v.get(o.textureOcclusion).id:void 0,emissiveTextureId:Object(n["k"])(o.textureEmissive)&&l?v.get(o.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(n["k"])(o.textureMetallicRoughness)&&l?v.get(o.textureMetallicRoughness).id:void 0,emissiveFactor:[f,h,p],mrrFactors:[o.metallicFactor,o.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const y=br(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,_=Object(m["a"])(f["u"],T);Object(h["e"])(_,e.attributes.position,e.transform);const O=[["position",{data:_.typedBuffer,size:_.elementCount,exclusive:!0}]],S=[["position",y]];if(Object(n["k"])(e.attributes.normal)){const t=Object(m["a"])(f["u"],T);Object(a["a"])(c,e.transform),Object(h["a"])(t,e.attributes.normal,c),O.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["normal",y])}if(Object(n["k"])(e.attributes.tangent)){const t=Object(m["a"])(f["C"],T);Object(a["a"])(c,e.transform),Object(p["c"])(t,e.attributes.tangent,c),O.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["tangent",y])}if(Object(n["k"])(e.attributes.texCoord0)){const t=Object(m["a"])(f["m"],T);Object(dr["b"])(t,e.attributes.texCoord0),O.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["uv0",y])}if(Object(n["k"])(e.attributes.color)){const t=Object(m["a"])(f["J"],T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof f["C"]?Object(p["b"])(t,e.attributes.color,255):e.attributes.color instanceof f["J"]?Object(ur["a"])(t,e.attributes.color):e.attributes.color instanceof f["H"]&&Object(p["b"])(t,e.attributes.color,1/256);else{Object(ur["b"])(t,255,255,255,255);const r=new f["B"](t.buffer,0,4);e.attributes.color instanceof f["u"]?Object(h["d"])(r,e.attributes.color,255):e.attributes.color instanceof f["B"]?Object(fr["a"])(r,e.attributes.color):e.attributes.color instanceof f["z"]&&Object(h["d"])(r,e.attributes.color,1/256)}O.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["color",y])}const w=new j(O,S);b.stageResources.geometries.push(w),b.stageResources.materials.push(d.get(i)),l&&(Object(n["k"])(o.textureColor)&&b.stageResources.textures.push(v.get(o.textureColor)),Object(n["k"])(o.textureNormal)&&b.stageResources.textures.push(v.get(o.textureNormal)),Object(n["k"])(o.textureOcclusion)&&b.stageResources.textures.push(v.get(o.textureOcclusion)),Object(n["k"])(o.textureEmissive)&&b.stageResources.textures.push(v.get(o.textureEmissive)),Object(n["k"])(o.textureMetallicRoughness)&&b.stageResources.textures.push(v.get(o.textureMetallicRoughness))),b.numberOfVertices+=T;const M=w.boundingInfo;Object(n["k"])(M)&&(Object(u["g"])(b.boundingBox,M.getBBMin()),Object(u["g"])(b.boundingBox,M.getBBMax()))})}),l}function vr(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function br(e,t){switch(t){case 4:return Object(g["c"])(e);case 5:return Object(g["b"])(e);case 6:return Object(g["a"])(e)}}function gr(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const a of i.parts){const i=a.attributes.normal;if(Object(n["j"])(i))return;const o=a.attributes.position,u=o.count,h=Object(d["e"])(),p=Object(d["e"])(),v=Object(d["e"])(),b=Object(m["a"])(f["J"],u),g=Object(m["a"])(f["u"],u),x=Object(s["b"])(Object(c["d"])(),a.transform);for(let n=0;n<u;n++){o.getVec(n,p),i.getVec(n,h),Object(l["n"])(p,p,a.transform),Object(l["g"])(v,p,t.center),Object(l["a"])(v,v,t.radius);const s=v[2],c=Object(l["m"])(v),d=Math.min(.45+.55*c*c,1);Object(l["a"])(v,v,t.radius),Object(l["n"])(v,v,x),Object(l["o"])(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l["f"])(v,v,h,s>-1?.2:Math.min(-4*s-3.8,1)),g.setVec(n,v),b.set(n,0,255*d),b.set(n,1,255*d),b.set(n,2,255*d),b.set(n,3,255)}a.attributes.normal=g,a.attributes.color=b}}}},"9cc4":function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)a[0]=e[s],i(a,o,1),t[s]=o[0],r[s]=o[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const a=new Float64Array(1),o=new Float32Array(2)},a1ff:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r("38a4"),n=r("b2b2"),a=r("1956"),o=r("d17d"),s=r("c514");const c=4;class l{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(o["c"].Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(o["c"].Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||c,this._descriptor.height=this._descriptor.height||c);const i=this._context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES),o=this._descriptor;l._validateTexture(this._context,o),r.pixelStorei(r.UNPACK_ALIGNMENT,o.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,o.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.preMultiplyAlpha?1:0);const s=o.pixelFormat;let u=o.internalFormat?o.internalFormat:this._deriveInternalFormat(s,o.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,n=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,n=e.videoHeight),o.width&&o.height,r.texImage2D(t,0,u,s,o.dataType,e),Object(a["a"])(r),o.hasMipmap&&this.generateMipmap(),void 0===o.width&&(o.width=i),void 0===o.height&&(o.height=n)}else{null!=o.width&&null!=o.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&u===r.DEPTH_STENCIL&&(u=r.DEPTH24_STENCIL8);let i=o.width,c=o.height;if(d(e)){const n=Math.round(Math.log(Math.max(i,c))/Math.LN2)+1;o.hasMipmap=o.hasMipmap&&n===e.levels.length;for(let a=0;;++a){const n=e.levels[Math.min(a,e.levels.length-1)];if(r.compressedTexImage2D(t,a,u,i,c,0,n),1===i&&1===c||!o.hasMipmap)break;i=Math.max(1,i>>1),c=Math.max(1,c>>1)}}else if(Object(n["k"])(e))r.texImage2D(t,0,u,i,c,0,s,o.dataType,e),Object(a["a"])(r),o.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,u,i,c,0,s,o.dataType,null),Object(a["a"])(r),(1!==i||1!==c)&&o.hasMipmap;++e)i=Math.max(1,i>>1),c=Math.max(1,c>>1)}l._applySamplingMode(r,this._descriptor),l._applyWrapMode(r,this._descriptor),l._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(a["a"])(r),this._context.bindTexture(i,l.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,n,a,o=3553){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,c=this._descriptor,d=this._context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>c.width||n>c.height||t+i>c.width||r+n>c.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,c.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,c.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.preMultiplyAlpha?1:0),a instanceof ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?s.texSubImage2D(o,e,t,r,c.pixelFormat,c.dataType,a):s.texSubImage2D(o,e,t,r,i,n,c.pixelFormat,c.dataType,a),this._context.bindTexture(d,l.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,l._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,l.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,l._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(l._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(l._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(i["j"])(t.width)&&Object(i["j"])(t.height);Object(s["a"])(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}function d(e){return Object(n["k"])(e)&&"type"in e&&"compressed"===e.type}l.TEXTURE_UNIT_FOR_UPDATES=0},a7d7:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var i=r("47f8"),n=r("7cb4"),a=r("3886");Object(i["b"])(0,.6,.2);function o(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(n["a"],t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(a["a"]`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(a["a"]`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(a["a"]`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(a["a"]`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(a["a"]`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(a["a"]`float getBakedOcclusion() { return 1.0; }`),r.code.add(a["a"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(a["a"]`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},aab5:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e,t){const r=e.fragment;r.code.add(i["a"]`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(i["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(i["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(i["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},b09a:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(i["a"]`vec3 positionModel() { return position; }`)}},b0ab:function(e,t,r){"use strict";r.d(t,"a",(function(){return A})),r.d(t,"b",(function(){return C}));var i=r("bd75"),n=r("17ca"),a=r("d272"),o=r("4db9"),s=r("d539"),c=r("c332"),l=r("b09a"),d=r("6cb2"),u=r("dfaf"),f=r("6d5b"),h=r("17b0"),p=r("7e21"),m=r("d047"),v=r("7088"),b=r("ea4b"),g=r("c6d7"),x=r("5d5f"),y=r("a7d7"),T=r("d017"),_=r("be24"),O=r("ebd5"),S=r("3626"),w=r("3886"),M=r("690a");function C(e){const t=new M["a"],r=t.vertex.code,C=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l["a"]),t.varyings.add("vpos","vec3"),t.include(_["a"],e),t.include(s["a"],e),t.include(h["a"],e),0!==e.output&&7!==e.output||(t.include(c["a"],e),t.include(o["a"],{linearDepth:!1}),e.offsetBackfaces&&t.include(n["a"]),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u["a"],e),t.include(i["a"],e),t.include(d["a"],e),t.include(f["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(w["a"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${w["a"].float(O["c"])}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?w["a"]`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a["a"],e),t.include(O["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(m["a"]),t.include(g["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S["a"]),C.add(w["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?w["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?w["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:w["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?w["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:w["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a["a"],e),t.include(b["a"],e),t.include(v["a"],e),t.include(O["a"],e),e.receiveShadows&&t.include(T["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(m["a"]),t.include(g["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y["a"],e),t.include(x["a"],e),t.fragment.include(S["a"]),C.add(w["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?w["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?w["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:w["a"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?w["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:w["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${w["a"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?w["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:w["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:w["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?w["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p["a"],e),t}const A=Object.freeze({__proto__:null,build:C})},bd75:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i["a"]`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i["a"]`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(i["a"]`void forwardLinearDepth() {}`)}},be24:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var i=r("3886");function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i["a"]`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(i["a"]`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i["a"]`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i["a"]`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i["a"]`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i["a"]`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i["a"]`vec4 vvColor() { return vec4(1.0); }`)}function a(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function o(e,t){a(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},c332:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("3886");function n(e){const t=i["a"]`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i["a"]`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i["a"]`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i["a"]`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},c514:function(e,t,r){"use strict";function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,"a",(function(){return i}))},c51b:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e){e.vertex.code.add(i["a"]`const float PI = 3.141592653589793;`),e.fragment.code.add(i["a"]`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},c6d7:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r("3886");function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i["a"]`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function a(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},d017:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r("501b"),n=r("3886");function a(e){e.fragment.include(i["a"]),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n["a"]`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function o(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}},d047:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("501b"),n=r("3886");function a(e){e.include(i["a"]),e.code.add(n["a"]`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},d17d:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n}));const i=33984;var n;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(n||(n={}));const a=33306},d272:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r("b2b2"),n=r("e431"),a=r("0b2d"),o=r("3886");function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=o["a"]`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=o["a"]`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.sliceHighlightDisabled?o["a"]`#define highlightSlice(_color_, _pos_) (_color_)`:o["a"]`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=o["a"]`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function c(e,t,r,o){t.slicePlaneEnabled&&(Object(i["k"])(r)?(o?(Object(n["g"])(l,r.origin,o),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",a["b"]),e.setUniform3fv("slicePlaneBasis2",a["b"]),e.setUniform3fv("slicePlaneOrigin",a["b"])))}const l=Object(a["e"])()},d539:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r("0b2d"),n=r("6a21"),a=r("3886"),o=r("9cc4");function s(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(n["a"],t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[a["a"]`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,a["a"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a["a"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,a["a"]`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,a["a"]`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?a["a"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:a["a"]``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){class t{}function r(e,t){Object(o["b"])(t,c,l,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",l)}e.Uniforms=t,e.bindCustomOrigin=r}(s||(s={}));const c=Object(i["e"])(),l=Object(i["e"])()},d56e:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("3886"),n=r("1956");function a(e,t){const r=i["a"]`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(n["c"])()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},dfaf:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("3886");function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i["a"]`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i["a"]`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i["a"]`void forwardTextureCoordinates() {}`)}},ea4b:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r("3886");function n(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i["a"]`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var a=r("7088");function o(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i["a"]`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r("5d5f"),c=r("c51b"),l=r("d017");function d(e,t){const r=e.fragment;e.include(o),e.include(a["a"],t),0!==t.pbrMode&&e.include(s["a"],t),e.include(n,t),t.receiveShadows&&e.include(l["a"],t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(c["a"]),r.code.add(i["a"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(i["a"]`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?i["a"]`normalize(vPosWorld)`:i["a"]`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(i["a"]`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(i["a"]`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i["a"]`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(i["a"]`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(i["a"]`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(i["a"]`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(i["a"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i["a"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i["a"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},ebd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}));var i=r("3886");const n=.1,a=.001;function o(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i["a"]`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i["a"].float(a)}) { discard; } }
      `);break;case 1:r.code.add(i["a"]`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i["a"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i["a"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},fc00:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r("8190"),n=r("c6ac");class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const a=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(a)}else{const a=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(a)}}}class o{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i["m"],t),this}vec2f64(e,t){return this.appendField(e,i["n"],t),this}vec3f(e,t){return this.appendField(e,i["u"],t),this}vec3f64(e,t){return this.appendField(e,i["v"],t),this}vec4f(e,t){return this.appendField(e,i["C"],t),this}vec4f64(e,t){return this.appendField(e,i["D"],t),this}mat3f(e,t){return this.appendField(e,i["f"],t),this}mat3f64(e,t){return this.appendField(e,i["g"],t),this}mat4f(e,t){return this.appendField(e,i["h"],t),this}mat4f64(e,t){return this.appendField(e,i["i"],t),this}vec4u8(e,t){return this.appendField(e,i["J"],t),this}f32(e,t){return this.appendField(e,i["a"],t),this}f64(e,t){return this.appendField(e,i["b"],t),this}u8(e,t){return this.appendField(e,i["l"],t),this}u16(e,t){return this.appendField(e,i["j"],t),this}i8(e,t){return this.appendField(e,i["e"],t),this}vec2i8(e,t){return this.appendField(e,i["q"],t),this}vec2i16(e,t){return this.appendField(e,i["o"],t),this}vec2u8(e,t){return this.appendField(e,i["t"],t),this}vec4u16(e,t){return this.appendField(e,i["H"],t),this}u32(e,t){return this.appendField(e,i["k"],t),this}appendField(e,t,r){const i=t.ElementCount*Object(n["a"])(t.ElementType),a=this.stride;this.fields.set(e,{size:i,constructor:t,offset:a,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new o;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,r)=>e.fields.set(r,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new o}}}]);
//# sourceMappingURL=chunk-06091958.5635d53e.js.map