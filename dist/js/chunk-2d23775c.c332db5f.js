(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23775c"],{fae0:function(e,t,s){"use strict";s.r(t),s.d(t,"toBinaryGLTF",(function(){return J}));var i=s("f4cc"),r=s("4ae5"),n=s("c120");class a{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=a.HEADER_SIZE,this.length+=a.CHUNK_HEADER_SIZE;const s=this.textToArrayBuffer(e);if(this.length+=this.alignTo(s.byteLength,4),t&&(this.length+=a.CHUNK_HEADER_SIZE,this.length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const i=this.writeChunk(s,12,1313821514,32);t&&this.writeChunk(t,i,5130562)}writeHeader(){this.outView.setUint32(0,a.MAGIC,!0),this.outView.setUint32(4,a.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(e,t,s,i=0){const r=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,r,!0),this.outView.setUint32(t+=4,s,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}writeArrayBuffer(e,t,s,i,r){new Uint8Array(e,s,r).set(new Uint8Array(t,i,r),0)}textToArrayBuffer(e){if(Object(n["a"])("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;const t=new Uint8Array(e.length);for(let s=0;s<t.length;++s)t[s]=e.charCodeAt(s);return t.buffer}alignTo(e,t){return t*Math.ceil(e/t)}}a.HEADER_SIZE=12,a.CHUNK_HEADER_SIZE=8,a.MAGIC=1179937895,a.VERSION=2;var o,c,h,f,u,l,d,p=s("28eb"),g=s("b2b2"),m=s("04f0"),b=s("b139"),w=s("e431"),y=s("0b2d"),A=s("83fa"),x=s("e9ba");!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(o||(o={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(c||(c={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(h||(h={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(f||(f={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(u||(u={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(l||(l={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(d||(d={}));class E{constructor(e,t,s,i,r){this.buffer=e,this.componentType=s,this.dataType=i,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:r};const n=this.getElementSize();n>=4&&r!==h.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=n),t.bufferViews.push(this.bufferView),this.numComponentsForDataType=this.calculateNumComponentsForDataType()}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}createTypedArray(e,t){switch(this.componentType){case 5120:return new Int8Array(e,t);case 5126:return new Float32Array(e,t);case 5122:return new Int16Array(e,t);case 5121:return new Uint8Array(e,t);case 5125:return new Uint32Array(e,t);case 5123:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this.createTypedArray(e,t).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then(e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this.data.push(t[s]);delete this.asyncWritePromise}),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let r=0;r<this.accessorMin.length;++r)"number"!=typeof this.accessorMin[r]&&(this.accessorMin[r]=0),"number"!=typeof this.accessorMax[r]&&(this.accessorMax[r]=0);const i={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise(e=>this.finalizedPromiseResolve=e)}finalize(){const e=this.bufferView;return new Promise(e=>{const t=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&t.push(this.asyncWritePromise),e(Object(i["j"])(t))}).then(()=>{this.isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()})}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}calculateNumComponentsForDataType(){switch(this.dataType){case f.SCALAR:return 1;case f.VEC2:return 2;case f.VEC3:return 3;case f.VEC4:case f.MAT2:return 4;case f.MAT3:return 9;case f.MAT4:return 16}}}class O{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this.buffer=t}addBufferView(e,t,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new E(this,this.gltf,e,t,s);return this.bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this.bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this.bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const i of this.bufferViews)i.writeOutToBuffer(t,s),s+=i.byteSize;return t}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise(e=>{e(Object(i["j"])(this.getViewFinalizePromises()))}).then(()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e}),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const t of this.bufferViews)e+=t.byteSize;return e}}s("e06a");function T(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&R(s,t)}function R(e,t){Object(g["k"])(t.normal)&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:i,normal:r}=t,n=s.length/3;for(let a=0;a<n;++a){const e=3*s[3*a+0],t=3*s[3*a+1],n=3*s[3*a+2],o=Object(w["y"])(C,i[e+0],i[e+1],i[e+2]),c=Object(w["y"])(M,i[t+0],i[t+1],i[t+2]),h=Object(w["y"])(L,i[n+0],i[n+1],i[n+2]),f=Object(w["l"])(c,c,o),u=Object(w["l"])(h,h,o),l=Object(w["i"])(f,f,u);r[e+0]+=l[0],r[e+1]+=l[1],r[e+2]+=l[2],r[t+0]+=l[0],r[t+1]+=l[1],r[t+2]+=l[2],r[n+0]+=l[0],r[n+1]+=l[1],r[n+2]+=l[2]}for(let a=0;a<r.length;a+=3)Object(w["y"])(S,r[a],r[a+1],r[a+2]),Object(w["t"])(S,S),r[a+0]=S[0],r[a+1]=S[1],r[a+2]=S[2]}function B(e){if(Object(g["l"])(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new r["a"]({x:t,y:s,z:i,spatialReference:e.extent.spatialReference})}const C=Object(y["f"])(),M=Object(y["f"])(),L=Object(y["f"])(),S=Object(y["f"])();var I=s("ce50"),z=s("e041");function N(e){const t=F(e);return Object(g["l"])(t)?t.toDataURL():""}async function V(e){const t=F(e);if(Object(g["k"])(t))throw new I["a"]("imageToArrayBuffer","Unsupported image type");const s=await j(e),i=await new Promise(e=>t.toBlob(e,s));if(!i)throw new I["a"]("imageToArrayBuffer","Failed to encode image");return{data:await i.arrayBuffer(),type:s}}async function j(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if(Object(z["u"])(t)){const{mediaType:e}=Object(z["i"])(t);return"image/jpeg"===e?e:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function F(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,e.width,e.height),t}function _(e){const t=[],s=new Uint8Array(e);for(let i=0;i<s.length;i++)t.push(String.fromCharCode(s[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function U(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}class v{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===o.GLB||this.gltf.extras.options.imageOutputType===c.GLB;t&&(this.gltf.extras.binChunkBuffer=new O(this.gltf)),e.forEachScene(e=>{this.addScene(e)}),t&&this.gltf.extras.binChunkBuffer.finalize()}addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(e=>{t.nodes||(t.nodes=[]);const s=this.addNode(e);t.nodes.push(s)}),this.gltf.scenes.push(t)}addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;Object(w["q"])(s,y["c"])||(t.translation=Object(y["d"])(s));const i=e.rotation;Object(m["e"])(i,b["a"])||(t.rotation=Object(b["c"])(i));const r=e.scale;Object(w["q"])(r,y["a"])||(t.scale=Object(y["d"])(r)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode(e=>{t.children||(t.children=[]);const s=this.addNode(e);t.children.push(s)});const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras.options.bufferOutputType===o.GLB;let i;i=s?this.gltf.extras.binChunkBuffer:new O(this.gltf),this.params.origin||(this.params.origin=B(e));const r=Object(x["e"])(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});T(e,r),this.flipYZAxis(r);const n=i.addBufferView(5126,f.VEC3,h.ARRAY_BUFFER);let a,c,u,l;r.normal&&(a=i.addBufferView(5126,f.VEC3,h.ARRAY_BUFFER)),e.vertexAttributes.uv&&(c=i.addBufferView(5126,f.VEC2,h.ARRAY_BUFFER)),r.tangent&&(u=i.addBufferView(5126,f.VEC4,h.ARRAY_BUFFER)),e.vertexAttributes.color&&(l=i.addBufferView(5121,f.VEC4,h.ARRAY_BUFFER)),n.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),c&&c.startAccessor("TEXCOORD_0"),u&&u.startAccessor("TANGENT"),l&&l.startAccessor("COLOR_0");const d=r.position.length/3,{position:p,normal:m,tangent:b}=r,{color:w,uv:y}=e.vertexAttributes;for(let o=0;o<d;++o)n.push(p[3*o+0]),n.push(p[3*o+1]),n.push(p[3*o+2]),a&&Object(g["l"])(m)&&(a.push(m[3*o+0]),a.push(m[3*o+1]),a.push(m[3*o+2])),c&&Object(g["l"])(y)&&(c.push(y[2*o+0]),c.push(y[2*o+1])),u&&Object(g["l"])(b)&&(u.push(b[4*o+0]),u.push(b[4*o+1]),u.push(b[4*o+2]),u.push(b[4*o+3])),l&&Object(g["l"])(w)&&(l.push(w[4*o+0]),l.push(w[4*o+1]),l.push(w[4*o+2]),l.push(w[4*o+3]));const A=n.endAccessor(),E=this.addAccessor(n.index,A);let R,C,M,L,S;if(a){const e=a.endAccessor();R=this.addAccessor(a.index,e)}if(c){const e=c.endAccessor();C=this.addAccessor(c.index,e)}if(u){const e=u.endAccessor();M=this.addAccessor(u.index,e)}if(l){const e=l.endAccessor();L=this.addAccessor(l.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(S=i.addBufferView(5125,f.SCALAR,h.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(S,e.components,t,E,R,C,M,L)):this.addMeshVertexNonIndexed(e.components,t,E,R,C,M,L),n.finalize(),a&&a.finalize(),c&&c.finalize(),u&&u.finalize(),S&&S.finalize(),l&&l.finalize(),s||i.finalize();const I=this.gltf.meshes.length;return this.gltf.meshes.push(t),I}flipYZAxis({position:e,normal:t,tangent:s}){this.flipYZBuffer(e,3),this.flipYZBuffer(t,3),this.flipYZBuffer(s,4)}flipYZBuffer(e,t){if(!Object(g["k"])(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t}}addMaterial(e){if(null===e)return;const t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=l.MASK;break;case"auto":case"blend":s.alphaMode=l.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=e=>e**2.1,r=e=>{const t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if(Object(g["l"])(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=r(e.color)),Object(g["l"])(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),Object(g["l"])(e.normalTexture)&&(s.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof A["a"]){if(Object(g["l"])(e.emissiveTexture)&&(s.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),Object(g["l"])(e.emissiveColor)){const t=r(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}Object(g["l"])(e.occlusionTexture)&&(s.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),Object(g["l"])(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const n=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(e),n}addTexture(e){return this.gltf.textures||(this.gltf.textures=[]),Object(p["b"])(this.textureMap,e,()=>{const t={sampler:this.addSampler(e),source:this.addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s})}addImage(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case c.GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(5121,f.SCALAR),i=V(e.data).then(({data:e,type:t})=>(s.mimeType=t,e));t.writeAsync(i).then(()=>{t.finalize()}),s.bufferView=t.index;break}case c.DataURI:s.uri=N(e.data);break;default:this.gltf.extras.promises.push(V(e.data).then(({data:e,type:t})=>{s.uri=e,s.mimeType=t}))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i}addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const i={wrapS:t,wrapT:s};for(let n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}addMeshVertexIndexed(e,t,s,i,r,n,a,o){for(const c of t){e.startAccessor("INDICES");for(let s=0;s<c.faces.length;++s)e.push(c.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:i},indices:this.addAccessor(e.index,t),material:this.addMaterial(c.material)};r&&"flat"!==c.shading&&(h.attributes.NORMAL=r),n&&(h.attributes.TEXCOORD_0=n),a&&"flat"!==c.shading&&(h.attributes.TANGENT=a),o&&(h.attributes.COLOR_0=o),s.primitives.push(h)}}addMeshVertexNonIndexed(e,t,s,i,r,n,a){const o={attributes:{POSITION:s}};i&&(o.attributes.NORMAL=i),r&&(o.attributes.TEXCOORD_0=r),n&&(o.attributes.TANGENT=n),a&&(o.attributes.COLOR_0=a),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}class P{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}forEachScene(e){this._scenes.forEach(e)}}class D{constructor(){this.name="",this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}}class G{constructor(e){this.mesh=e,this.name="",this.translation=Object(y["f"])(),this.rotation=Object(b["b"])(),this.scale=Object(y["d"])(y["a"]),this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}set rotationAngles(e){Object(m["f"])(this.rotation,e[0],e[1],e[2])}}const k="model.gltf",Y="model.glb";function H(e,t,s){const n=new v(e,t=t||{},s);let h=n.params;h?h.origin||(h.origin=new r["a"]({x:-1,y:-1,z:-1})):h={origin:new r["a"]({x:-1,y:-1,z:-1})};const f=h.origin,u=n.gltf,l=u.extras.promises;let d=1,p=1,g=null;return Object(i["j"])(l).then(()=>{const e={origin:f};delete u.extras;const s="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(u,(s,i)=>{if("extras"!==s){if(i instanceof ArrayBuffer){if(U(i))switch(t.imageOutputType){case c.DataURI:case c.GLB:break;case c.External:default:{const t=`img${p}.png`;return p++,e[t]=i,t}}switch(t.bufferOutputType){case o.DataURI:return _(i);case o.GLB:if(g)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(g=i);case o.External:default:{const t=`data${d}.bin`;return d++,e[t]=i,t}}}return i}},s);return t.bufferOutputType===o.GLB||t.imageOutputType===c.GLB?e[Y]=new a(i,g).buffer:e[k]=i,e})}function Z(e,t){return H(e,{bufferOutputType:o.GLB,imageOutputType:c.GLB,jsonSpacing:0},t)}class W{constructor(e,t){this.file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this.file)}download(e){return new Promise(()=>{const t=new Blob([this.file.data],{type:this.file.type});let s=e;if(s||(s="model.glb"),"glb"!==s.split(".").pop()&&(s+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,s);else{const e=document.createElement("a"),i=URL.createObjectURL(t);e.href=i,e.download=s,document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e),window.URL.revokeObjectURL(i)}),0)}})}}function J(e,t){const s=new P,i=new D;s.addScene(i);const r=new G(e);return i.addNode(r),Z(s,t).then(e=>new W(e[Y],e.origin))}}}]);
//# sourceMappingURL=chunk-2d23775c.c332db5f.js.map