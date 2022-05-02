function load() {
    var script = document.createElement('script');
    script.onload = function () {
        //
    };
    script.src = "https://giscus.app/client.js";
    script["data-repo"] = "icedac/dosi.dev";
    script["data-repo-id"] = "R_kgDOHJo_Ug";
    script["data-category"] = "Announcements";
    script["data-category-id"] = "DIC_kwDOHJo_Us4CO5g3";
    script["data-mapping"]="pathname";
    script["data-reactions-enabled"]="1";
    script["data-emit-metadata"]="0";
    script["data-input-position"]="bottom";
    script["data-theme"]="light";
    script["data-lang"]="ko";
    script["crossorigin"]="anonymous";

    document.head.appendChild(script);
}
