let {src,dest,watch,pipe,series,parallel} = require("gulp");

let htmlmin = require("gulp-htmlmin");

let htmlminTask = ()=>{
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    }

    return src("./src/index.html").pipe(htmlmin(options)).pipe(dest("./dist/html"));
};

exports.htmlminTask = htmlminTask;

let cssmin = require("gulp-cssmin");

let cssminTask = ()=>{
    return src("./src/css/*").pipe(cssmin()).pipe(dest("./dist/css"));
}
exports.cssminTask = cssminTask;


let rename = require("gulp-rename");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");

let jsTask = ()=>{
    return src(["./src/js/*"]).pipe(babel()).pipe(dest("./dist/js"));
}
exports.jsTask = jsTask;
exports.AllTask = series(htmlminTask,cssminTask,jsTask);