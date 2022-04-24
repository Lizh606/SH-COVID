<template>
  <div>
    <div id="viewDiv" class="esri-widget">
      <div
        id="screenshotBtn"
        class="export-button1"
        aria-label="地图截屏"
        title="地图截屏"
      >
        <IconSvg iconClass="jieping" class="export-button-icon"
          >地图截屏</IconSvg
        >
      </div>
    </div>
    <div id="screenshotDiv" class="hide">
      <img class="js-screenshot-image" />
      <div>
        <label>设置要在图像上显示的文本: </label
        ><input type="text" placeholder="图片文本" id="textInput" autofocus />
      </div>
      <button
        id="downloadBtn"
        class="action-button"
        aria-label="Download image"
        title="Download image"
      >
        下载图像
      </button>
      <button
        id="closeBtn"
        class="action-button"
        aria-label="Back to webscene"
        title="Back to webscene"
      >
        回到主页
      </button>
    </div>
    <div id="maskDiv" class="hide screenshotCursor"></div>
  </div>
</template>

<script>
export default {
  name: "screentake",
  inject: ["TdtMap"],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.map = this.TdtMap.map;
        this.view = this.TdtMap.view;
        const jp = document.getElementById('viewDiv');
        this.view.ui.add(jp)
      }, 100);
    });
    const screenshotBtn = document.getElementById("screenshotBtn");

    // the button that triggers download
    const downloadBtn = document.getElementById("downloadBtn");
    const screenshotDiv = document.getElementById("screenshotDiv");
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", () => {
      screenshotDiv.classList.add("hide");
    });

    // replace the navigation elements with screenshot area selection button
    // this.view.ui.empty("top-left");
    // this.view.view.add(screenshotBtn, "top-left");

    // add an event listener to trigger the area selection mode
    screenshotBtn.addEventListener("click", () => {
      screenshotBtn.classList.add("active");
      this.view.container.classList.add("screenshotCursor");
      let area = null;

      // listen for drag events and compute the selected area
      const dragHandler = this.view.on("drag", (event) => {
        // prevent navigation in the view
        event.stopPropagation();

        // when the user starts dragging or is dragging
        if (event.action !== "end") {
          // calculate the extent of the area selected by dragging the cursor
          const xmin = this.clamp(
            Math.min(event.origin.x, event.x),
            0,
            this.view.width
          );
          const xmax = this.clamp(
            Math.max(event.origin.x, event.x),
            0,
            this.view.width
          );
          const ymin = this.clamp(
            Math.min(event.origin.y, event.y),
            0,
            this.view.height
          );
          const ymax = this.clamp(
            Math.max(event.origin.y, event.y),
            0,
            this.view.height
          );
          area = {
            x: xmin,
            y: ymin,
            width: xmax - xmin,
            height: ymax - ymin,
          };
          // set the position of the div element that marks the selected area
          this.setMaskPosition(area);
        }
        // when the user stops dragging
        else {
          // remove the drag event listener from the SceneView
          dragHandler.remove();
          // the screenshot of the selected area is taken
          this.view
            .takeScreenshot({ area: area, format: "png" })
            .then((screenshot) => {
              // display a prethis.view of the image
              this.showPreview(screenshot);
              let that = this;
              // create the image for download
              downloadBtn.onclick = () => {
                const text = document.getElementById("textInput").value;
                // if a text exists, then add it to the image
                if (text) {
                  const dataUrl = this.getImageWithText(screenshot, text);
                  that.downloadImage(`Screentake.png`, dataUrl);
                }
                // otherwise download only the webscene screenshot
                else {
                  that.downloadImage(`Screentake.png`, screenshot.dataUrl);
                }
              };

              // the screenshot mode is disabled
              screenshotBtn.classList.remove("active");
              this.view.container.classList.remove("screenshotCursor");
              this.setMaskPosition(null);
            });
        }
      });
    });
  },
  methods: {
    clamp(value, from, to) {
      return value < from ? from : value > to ? to : value;
    },
    setMaskPosition(area) {
      // the orange mask used to select the area
      const maskDiv = document.getElementById("maskDiv");
      if (area) {
        maskDiv.classList.remove("hide");
        maskDiv.style.left = `${area.x}px`;
        maskDiv.style.top = `${area.y}px`;
        maskDiv.style.width = `${area.width}px`;
        maskDiv.style.height = `${area.height}px`;
      } else {
        maskDiv.classList.add("hide");
      }
    },
    showPreview(screenshot) {
      // element where we display the print preview
      const screenshotDiv = document.getElementById("screenshotDiv");
      screenshotDiv.classList.remove("hide");
      // add the screenshot dataUrl as the src of an image element
      const screenshotImage = document.getElementsByClassName(
        "js-screenshot-image"
      )[0];
      screenshotImage.width = screenshot.data.width;
      screenshotImage.height = screenshot.data.height;
      screenshotImage.src = screenshot.dataUrl;
    },
    getImageWithText(screenshot, text) {
      const imageData = screenshot.data;

      // to add the text to the screenshot we create a new canvas element
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = imageData.height;
      canvas.width = imageData.width;

      // add the screenshot data to the canvas
      context.putImageData(imageData, 0, 0);
      context.font = "20px Arial";
      context.fillStyle = "#000";
      context.fillRect(
        0,
        imageData.height - 40,
        context.measureText(text).width + 20,
        30
      );

      // add the text from the textInput element
      context.fillStyle = "#fff";
      context.fillText(text, 10, imageData.height - 20);

      return canvas.toDataURL();
    },
    downloadImage(filename, dataUrl) {
      // the download is handled differently in Microsoft browsers
      // because the download attribute for <a> elements is not supported
      if (!window.navigator.msSaveOrOpenBlob) {
        // in browsers that support the download attribute
        // a link is created and a programmatic click will trigger the download
        const element = document.createElement("a");
        element.setAttribute("href", dataUrl);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      } else {
        // for MS browsers convert dataUrl to Blob
        const byteString = atob(dataUrl.split(",")[1]);
        const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });

        // download file
        window.navigator.msSaveOrOpenBlob(blob, filename);
      }
    },
  },
};
</script>

<style scoped>
.export-button-icon {
  box-sizing: inherit;
  color: rgba(128, 134, 149, 1);
  font-size: 18px;
  content: "";
  color: inherit;
  display: block;
  margin: 0 auto;
  position: relative;
}
.export-button1 {
  position: fixed;
  bottom: 164px;
  right: 20px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  font-size: 14px;
  background-color: #fff;
  color: #6e6e6e;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 125ms ease-in-out;
}
#screenshotDiv {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
}

.hide {
  display: none;
}

img {
  border: 10px solid white;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
}

#screenshotDiv > * {
  margin: 0.5em;
}

.screenshotCursor {
  cursor: crosshair;
}

.action-button {
  padding: 0.6em;
  border: 1px solid #0079c1;
  text-align: center;
  background-color: white;
  cursor: pointer;
}

.action-button:hover,
.action-button:focus {
  background: #0079c1;
  color: white;
}

#maskDiv {
  position: absolute;
  background: rgba(255, 51, 0, 0.1);
  border: 2px dashed rgb(255, 51, 0);
}
</style>
