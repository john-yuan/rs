/**
 * @module views/demo/testing/testing
 * @version 2018-10-24 1.0.0
 */
define(function (require, exports, module) {
    var $ = require('libs/zepto');
    var loader = require('loader/loader');
    var $mRootNode, mRenderEvent;

    /**
     * 绑定事件
     */
    var bindEvents = function () {
        $mRootNode.on('click', '.btn-goback-to-homepage', function () {
            loader.router.routeTo('demo/home');
        });
    };

    /**
     * 渲染视图
     *
     * @param {RenderEvent} event
     */
    exports.render = function (event) {
        var cssText = require('loader/plugin/text!./testing.less');
        var htmlText = require('loader/plugin/text!./testing.tpl');

        // 渲染视图并保存视图根节点
        $mRootNode = $(loader.view.render(module, cssText, htmlText));
        // 保存渲染视图事件对象
        mRenderEvent = event;
        // 绑定事件
        bindEvents();

        // TODO: 其它操作

    };

    /**
     * 销毁视图
     *
     * @param {DestroyEvent} event
     */
    exports.destroy = function (event) {
        // TODO: 清理工作（解绑事件等操作）

        // 解绑事件
        $mRootNode.off();
        $mRootNode = null;
        // 释放引用
        mRenderEvent = null;
        // 销毁视图
        loader.view.destroy(module);
    };

    /**
     * 参数改变事件
     *
     * @param {ParamChangeEvent} event
     */
    exports.onParamChange = function (event) {
        // TODO: 其它操作
    };
});
