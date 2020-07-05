import React from "react";
import format from "date-fns/format";


export const HomePreview = ({entry, getAsset, widgetFor}) => {
  let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    return (
        <div className="ph3 cover" style={{
            backgroundImage: image && `url(${image})`
          }}>
            <div className="mw7 center ph3 pv3">
            <div className="db">
                <div className="mw7 relative bg-fix-primary mb3">
                <h1 className="f2 f1-l b di lh-title mb3 mw6 primary center">
                    { entry.getIn(["data", "title"]) }
                </h1>
                </div>
                <div className="mw7 relative bg-fix-primary">
                <p className="b f4 di lh-title mb3 primary mw6 center">{ entry.getIn(["data", "subtitle"]) }</p>
                </div>
            </div>
                <div className="center mw6">
                    { widgetFor("body") }
                </div>
            </div>
        </div>
    )
}