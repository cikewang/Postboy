function show_message(message) {
    $("#message_info").html(message);
    $(".message_alert").removeClass("hide");
    setTimeout(function () {
        $(".message_alert").addClass("hide")
    }, 3000);
    return false;
}

function new_tab(id) {
    return '<li role="presentation" class="tab tab_' + id + ' tab_style active"><a href="#' + id + '" aria-controls="profile" role="tab" data-toggle="tab" class="tab_name_a"><span class="tab_name">New Tab</span><span href="#" class="close_span hide" style="position: absolute;top: -3px;right: 5px; cursor: pointer;"> x </span></a></li>';
}

function new_tab_content(id) {
    return '<div role="tabpanel" class="tab-pane tab_' + id + '  active tab_content" id="' + id + '"><form id="send_form_' + id + '">' + token_html + '<input type="hidden" id="project_id" value="0" name="project_id"><input type="hidden" id="api_id" value="0" name="api_id"><!-- 输入框开始 --><span class="form-inline"><div class="form-group" style="width: 82%;"><div class="input-group" style="width: 100%;"><div class="input-group-btn" style="width: 10%;"><select class="form-control" style="width: 100%;" name="action_method" id="action_method"><option value="get">GET</option><option value="post">POST</option></select></div><input type="text" class="form-control" placeholder="Enter request URL" name="api" id="api"></div></div><div class="form-group"><div class="btn-group"><button type="button" class="btn btn-primary send_btn">Send</button><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span><span class="sr-only">Toggle Dropdown</span></button><ul class="dropdown-menu"><li><a href="javascript:void(0)" class="local_send">Local send</a></li></ul></div><!-- Split button --><div class="btn-group"><button type="button" class="btn btn-default save_btn">Save</button><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button> <ul class="dropdown-menu"> <li><a href="javascript:void(0)" class="save_as_btn">Save as...</a></li></ul></div></div></span><!-- 输入框结束 --> <!-- 参数框开始 --><div calss="row" style="margin-top: 20px;">            <div calss="container-fluid">                <ul class="nav nav-tabs" role="tablist">                    <li role="presentation" class="active">                        <a href="#header_' + id + '" aria-controls="header_' + id + '" role="tab"                           data-toggle="tab">header</a>                    </li>                    <li role="presentation">                        <a href="#body_' + id + '" aria-controls="body_' + id + '" role="tab" data-toggle="tab">Body</a>                    </li>                    <li role="presentation">                        <a href="#cookie_' + id + '" aria-controls="cookie_' + id + '" role="tab"                           data-toggle="tab">Cookie</a>                    </li>                </ul>                <div class="tab-content" style="margin-top: 20px;">                    <div role="tabpanel" class="tab-pane active header_' + id + '" id="header_' + id + '">                        <table class="table table-bordered header_table">                            <tr>                                <td>&nbsp;</td>                                <td>Key</td>                                <td>Value</td>                                <td>Description</td>                                <td align="center"><a href="javascript:"                                                      class="glyphicon glyphicon-plus header_plus"                                                      aria-hidden="true"></a></td>                            </tr>                            <tr>                                <td align="center" style="padding-top: 15px;">                                    <input type="checkbox" id="header_checkbox"                                           name="header_checkbox[]">                                </td>                                <td>                                    <input type="text" class="form-control h_key" id="header_key"                                           name="header_key[]" placeholder="key">                                </td>                                <td>                                    <input type="text" class="form-control" id="header_value"                                           name="header_value[]"                                           placeholder="value">                                </td>                                <td>                                    <input type="text" class="form-control" id="header_description"                                           name="header_description[]"                                           placeholder="description">                                </td>                                <td align="center" style="padding-top: 15px;">                                    <a href="javascript:"                                       class="glyphicon glyphicon-minus header_minus"                                       aria-hidden="true"></a>                                </td>                            </tr>                        </table>                    </div>                    <div role="tabpanel" class="tab-pane" id="body_' + id + '">                        <table class="table table-bordered body_table">                            <tr>                                <td>&nbsp;</td>                                <td>Key</td><td>Value</td><td>Description</td><td align="center"><a href="javascript:" class="glyphicon glyphicon-plus body_plus"                                       aria-hidden="true"></a>                                </td></tr><tr><td align="center" style="padding-top: 15px;"><input type="checkbox" id="body_checkbox[]"                                           name="body_checkbox[]"></td><td><input type="text" class="form-control" id="body_key[]" name="body_key[]" placeholder="key">                                </td>                                <td>                                    <input type="text" class="form-control" id="body_value[]"                                           name="body_value[]"                                           placeholder="value">                                </td>                                <td>                                    <input type="text" class="form-control" id="body_description[]"                                           name="body_description[]"                                           placeholder="description">                                </td>                                <td align="center" style="padding-top: 15px;">                                    <a href="javascript:"                                       class="glyphicon glyphicon-minus body_minus"                                       aria-hidden="true"></a>                                </td>                            </tr>                        </table>                    </div>                    <div role="tabpanel" class="tab-pane" id="cookie_' + id + '">                        <table class="table table-bordered cookie_table">                            <tr>                                <td>&nbsp;</td>                                <td>Key</td>                                <td>Value</td>                                <td>Description</td>                                <td align="center">                                    <a href="javascript:"                                       class="glyphicon glyphicon-plus cookie_plus"                                       aria-hidden="true"></a>                                </td>                            </tr>                            <tr>                                <td align="center" style="padding-top: 15px;">                                    <input type="checkbox" id="body_checkbox[]"                                           name="cookie_checkbox[]">                                </td>                                <td>                                    <input type="text" class="form-control" id="cookie_key[]"                                           name="cookie_key[]"                                           placeholder="key">                                </td>                                <td>                                    <input type="text" class="form-control" id="cookie_value[]"                                           name="cookie_value[]"                                           placeholder="value">                                </td>                                <td>                                    <input type="text" class="form-control"                                           id="cookie_description[]" name="cookie_description[]"                                           placeholder="description">                                </td>                                <td align="center" style="padding-top: 15px;">                                    <a href="javascript:"                                       class="glyphicon glyphicon-minus cookie_minus"                                       aria-hidden="true"></a>                                </td>                            </tr>                        </table>                    </div>                </div>            </div>        </div>    </form>    <!-- 参数框结束 -->    <!-- 返回框开始 -->    <div>        <h4>Response</h4>        <textarea class="form-control response" rows="16"></textarea></div><!-- 返回框开始 --></div>'
}

function new_project(id) {
    return '<div class="panel panel-default project_div"><div class="panel-heading" role="tab" id="project_'+id+'"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">#2 Project</a><a href="/page/project?project_id=0" style="float: right;"><span class="glyphicon glyphicon-tasks" title="Batch test"></span></a><a href="/page/project?project_id=0" style="float: right;margin-right: 10px;"><span class="glyphicon glyphicon-trash" title="Batch test"></span></a></h4></div><div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="project_'+id+'"><div class="panel-body"><ul style="list-style-type:none;margin:0px;padding:0px;" class="project_ul"></ul></div></div></div>';
}

$(function () {

    /*左右模块移动*/
    var lastX = 0;
    var step = 5;
    var left_width = $('.col-md-2').css('width');
    var right_width = $('.col-md-10').css('width');
    left_width = parseInt(left_width.split("px")[0]);
    right_width = parseInt(right_width.split("px")[0]);
    var margin_right_left = $('.col-md-offset-2').css('margin-left');
    margin_right_left = parseInt(margin_right_left.split("px")[0]);
    $(".left_right_move").mousemove(function (e) {
        if (lastX > e.pageX) {
            /*左移动*/
            left_width -= step;
            margin_right_left -= step;
            right_width += step;
        } else if (lastX < e.pageX) {
            /*右移动*/
            left_width += step;
            margin_right_left += step;
            right_width -= step;
        }
        lastX = e.pageX;
        $('.col-md-2').css('width', left_width + "px");
        $('.col-md-10').css('width', right_width + "px");
        $('.col-md-offset-2').css('margin-left', margin_right_left + 'px');

    });

    /*历史API展示*/
    $.ajax({
        type: "get",
        data: {time: Date.parse(new Date())},
        dataType: "json",
        url: "/page/show/",
        success: function (msg) {
            $.each(msg, function (i, item) {
                $(".default_ul").prepend("<li class='history_li li_"+item.pk+"' ><a href='javascript:void(0)' id='" + item.pk + "' class='history_api'>" + item.fields.api + "</a> <span class='glyphicon glyphicon-trash hide delete_btn'   api_id='" + item.pk + "' aria-hidden='true'></span></li>")
            });

        },
        error: function (msg) {
            alert(2);
            console.log(msg);
        }
    });

    /*send 按钮事件*/
    $("#post_content").on('click', '.send_btn', function () {
        var form_dom = $(this).parent().parent().parent().parent();
        var api = form_dom.find("#api").val();
        var data = form_dom.serialize();
        if ('' == api) {
            return show_message("接口地址不能为空");
        } else {
            var class_id = form_dom.parent()[0].classList[1];
            api = $.trim(api);
            $("." + class_id + " .tab_name").html(api);
            form_dom.find("#api").val(api)
        }

        $.ajax({
            type: "post",
            url: "/page/test/",
            data: data,
            success: function (msg) {
                form_dom.parent().find(".response").html(msg);
            },
            error: function (msg) {
                return show_message(msg);
            }
        });
    });

    /*Ajax 请求需要支持跨域*/
    $("#post_content").on('click', '.local_send', function () {
        var form_dom = $(this).parent().parent().parent().parent().parent().parent();
        var api = form_dom.find("#api").val();
        var action_method = form_dom.find("#action_method").val();

        var data = form_dom.serialize();
        if ('' == api) {
            return show_message("接口地址不能为空");
        } else {
            var class_id = form_dom.parent()[0].classList[1];
            api = $.trim(api);
            $("." + class_id + " .tab_name").html(api);
            form_dom.find("#api").val(api)
        }

        $.ajax({
            type: action_method,
            url: api,
            data: data,
            success: function (msg) {
                form_dom.parent().find(".response").html(msg);
            },
            error: function () {
                $(".localhost_host_api").html(window.location.protocol + "//" + window.location.host);
                $('.myModal').modal('show')
            }

        });

    });

    /*保存按钮事件*/
    $("#post_content").on('click', '.save_btn', function () {
        var form_dom = $(this).parent().parent().parent().parent();
        var api = form_dom.find("#api").val();
        var data = form_dom.serialize();
        if ('' == api) {
            return show_message("接口地址不能为空");
        } else {
            var class_id = form_dom.parent()[0].classList[1];
            api = $.trim(api);
            $("." + class_id + " .tab_name").html(api);
            form_dom.find("#api").val(api)
        }

        data += '&save_action=1';

        $.ajax({
            type: "post",
            url: "/page/test/",
            data: data,
            success: function (msg) {
                form_dom.parent().find(".response").html(msg);
            },
            error: function (msg) {
                form_dom.parent().find(".response").html('');
                return show_message(msg);
            }
        });
    });


    /*header 删除节点*/
    $("#post_content").on('click', '.header_minus', function () {
        $(this).parent().parent().remove("tr");
    });

    $("#post_content").on("click", '.header_plus', function (event) {
        var header_html = '<tr><td align="center" style="padding-top:15px;"><input type="checkbox" id="header_checkbox[]" name="header_checkbox[]"></td><td><input type="text" class="form-control" id="header_key[]" name="header_key[]" placeholder="key"></td><td><input type="text" class="form-control" id="header_value[]" name="header_value[]" placeholder="value"></td><td><input type="text" class="form-control" id="header_description[] "name="header_description[]" placeholder="description"></td><td align="center" style="padding-top:15px;"><a href="javascript:" class="glyphicon glyphicon-minus header_minus" id="header_add" aria-hidden="true"></a></td></tr>';
        $(this).parent().parent().parent().append(header_html);

    });

    /*body 删除节点*/
    $("#post_content").on('click', '.body_minus', function () {
        $(this).parent().parent().remove("tr");
    });
    /*body 添加节点*/
    $("#post_content").on("click", '.body_plus', function (event) {
        var body_html = '<tr><td align="center" style="padding-top:15px;"><input type="checkbox" id="body_checkbox[]" name="body_checkbox[]"></td><td><input type="text" class="form-control" id="body_key[]" name="body_key[]" placeholder="key"></td><td><input type="text" class="form-control" id="body_value[]" name="body_value[]" placeholder="value"></td><td><input type="text" class="form-control" id="body_description[] "name="body_description[]" placeholder="description"></td><td align="center" style="padding-top:15px;"><a href="javascript:" class="glyphicon glyphicon-minus body_minus" id="body_add" aria-hidden="true"></a></td></tr>';
        $(this).parent().parent().parent().append(body_html);

    });

    /*cookie 删除节点*/
    $("#post_content").on('click', '.cookie_minus', function () {
        $(this).parent().parent().remove("tr");
    });

    $("#post_content").on("click", '.cookie_plus', function (event) {
        var cookie_html = '<tr><td align="center" style="padding-top:15px;"><input type="checkbox" id="cookie_checkbox[]" name="cookie_checkbox[]"></td><td><input type="text" class="form-control" id="cookie_key[]" name="cookie_key[]" placeholder="key"></td><td><input type="text" class="form-control" id="cookie_value[]" name="cookie_value[]" placeholder="value"></td><td><input type="text" class="form-control" id="cookie_description[] "name="cookie_description[]" placeholder="description"></td><td align="center" style="padding-top:15px;"><a href="javascript:" class="glyphicon glyphicon-minus cookie_minus" id="cookie_add" aria-hidden="true"></a></td></tr>';
        $(this).parent().parent().parent().append(cookie_html);

    });

    /*鼠标移动到Tab 显示变比标签*/
    $(".nav_tab").on('mousemove', '.tab', function () {
        $(this).find(".close_span").removeClass('hide');
    });

    $(".nav_tab").on('mouseout', '.tab', function () {
        $(this).find(".close_span").addClass('hide');
    });

    /*添加新标签*/
    $(".tab_plus").click(function () {
        $(".nav_tab>li").removeClass('active');
        $("#post_content>div").removeClass('active');

        var tab_number = $(".nav_tab>li").length;
        var new_tab_name = "id_" + tab_number;
        var new_tab_title = new_tab(new_tab_name);
        var new_tab_content_html = new_tab_content(new_tab_name);
        $(this).parent().before(new_tab_title);
        $("#post_content").append(new_tab_content_html);

    });

    /*关闭标签*/
    $(".nav_tab").on('click', '.close_span', function () {
        if (confirm("确定关闭标签吗？") == true) {
            $(".tab_style").removeClass('active');
            var id = $(this).parent().parent().prev()[0].classList[1];
            $("." + id).addClass("active");
            var id = $(this).parent().attr("href");
            $(this).parent().parent().remove();
            $(id).remove();
        } else {
            $(".tab_style").removeClass('active');
            $(".tab_content").removeClass('active');
            $(this).parent().parent().addClass('active');
            var id = $(this).parent().attr("href");
            $(id).addClass('active');
        }
    });

    /*历史API显示删除按钮*/
    $(".project_ul").on('mousemove', '.history_li', function () {
        $(this).find('.delete_btn').removeClass('hide');
    });

    /*历史API隐藏删除按钮*/
    $(".project_ul").on('mouseout', '.history_li', function () {
        $(this).find('.delete_btn').addClass('hide');
    });

    /*批量测试按钮*/
    $('#batch_test_btn').on('click', function () {

        var compare_response = $('#compare_response').is(':checked');
        var compare_runtime = $('#compare_runtime').is(':checked');

        var checked_length = $("input[class=api_id]:checked").length;
        if (checked_length <= 0) {
            alert("请选择要测试的接口");
            return;
        }

        var width = 0;
        $(this).html('测试中....');
        $(this).attr('disabled', 'disabled');
        $('.test_progress_bar_div').removeClass('hide');
        $('.test_status_span').removeClass("glyphicon glyphicon-ok");

        var step = parseInt(100/checked_length);

        $(".batch_tbody>tr").each(function (e, items) {
            var api_id = $(this).find(".api_id").val();
            var checked = $(this).find(".api_id").is(':checked');
            if (checked === true) {
                $(this).find(".test_status_span").addClass("testing_img");
                $.ajax({
                    type: "get",
                    url: "/page/test_one/",
                    data: {api_id : api_id, compare_response:compare_response, compare_runtime:compare_runtime},
                    dataType: 'json',
                    success: function (msg) {
                        $(items).find(".test_status_span").removeClass("testing_img");
                        $(items).find(".test_status_span").addClass("glyphicon glyphicon-ok");
                        $(items).find(".glyphicon").css('color', 'green');
                    },
                    error: function (msg) {
                        console.log(msg)
                    }
                });

                width += step;
                if ((checked_length - e) == 1) {
                    width = 100;
                }
                $(".test_progress_bar").css("width", width+'%');
                $(".test_progress_bar").html(width+'%');
            }
        });

        $('#batch_test_btn').html('开始测试');
        $('#batch_test_btn').removeAttr('disabled');
    })

    /*批量测试全选checkbox*/
    $("#checked_all").click(function () {
        var checked = $(this).is(":checked");
        if (checked) {
            $(".api_id").each(function(){this.checked=true;});
        } else {
            $(".api_id").each(function(){this.checked=false;});
        }
    });

    $("#save_project").click(function(){
        var project_name = $("#project_name").val();
        var project_description = $("project_description").val();

        if (project_name == '') {
            $(".project_msg").html("The project name can't be empty.");
            $(".project_msg").removeClass('hide');
            setTimeout(function () {
                $(".project_msg").addClass("hide")
            }, 3000);
            return false;
        }

        $.ajax({
            type: "post",
            url: "/page/add_project/",
            data: {project_name:project_name, project_description:project_description, csrfmiddlewaretoken: $(token_html).val()},
            success: function (msg) {

            },
            error: function (msg) {
                $(".project_msg").html(msg);
                $(".project_msg").removeClass('hide');
            }
        });

    });


    $(".project_list_a").click(function(){

        var project_id = $(this).attr('id');
        var ul = 'project_ul_'+project_id;
        $.ajax({
            type: "get",
            data: {project_id:project_id, time: Date.parse(new Date())},
            dataType: "json",
            url: "/page/show/",
            success: function (msg) {
                $(".project_list_div").find("."+ul).html('');
                $.each(msg, function (i, item) {
                    $(".project_list_div").find("."+ul).prepend("<li class='history_li li_"+item.pk+"'><a href='javascript:void(0)' id='" + item.pk + "' class='history_api'>" + item.fields.api + "</a> <span class='glyphicon glyphicon-trash hide delete_btn' api_id="+item.pk+" aria-hidden='true'></span></li>")
                });

            },
            error: function (msg) {
                alert(2);
                console.log(msg);
            }
        });

    });

    $(".all_project_list").on("click", ".delete_btn", function () {
        var api_id = $(this).attr("api_id");
        $.ajax({
            type: "get",
            data: {api_id:api_id, time: Date.parse(new Date())},
            dataType: "json",
            url: "/page/del_api/",
            success: function (msg) {
                console.log(msg)
                if (msg.code >= 0) {
                    $(".li_"+api_id).remove();
                }

            },
            error: function (msg) {
                console.log(msg);
            }
        });
    })
});