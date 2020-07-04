import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export const HomePreview = ({entry, getAsset, widgetFor}) => {
  let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    return (
        <div className="pv5 pv6-l ph3 bg-center cover" style={{
            backgroundImage: image && `url(${image})`
          }}>
            <div className="mw7 center ph3">
            <div className="db mb3">
                <div className="mw7 relative bg-fix-primary mb3">
                <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
                    { entry.getIn(["data", "title"]) }
                </h1>
                </div>
                <div className="mw7 relative bg-fix-primary">
                {<p className="b f4 di lh-title mb3 white mw6 bg-primary">{ entry.getIn(["data", "subtitle"]) }</p>}
                </div>
            </div>
                <div className="center mw6 pv3">
                    { widgetFor("body") }
                </div>
            </div>
        </div>
    )
}