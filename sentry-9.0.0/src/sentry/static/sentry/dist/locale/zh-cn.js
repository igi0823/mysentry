var exports=webpackJsonpexports([76],{1560:function(e,t,s){s(1561),e.exports=s(475)},1561:function(e,t,s){!function(e,t){t(s(36))}(0,function(e){"use strict";return e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,s){var a=100*e+t;return a<600?"凌晨":a<900?"早上":a<1130?"上午":a<1230?"中午":a<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})})},475:function(e,t){e.exports={Username:["用户名"],"Last Seen":["最后出现时间"],"First Seen":["首次出现时间"],Remove:["移除"],Generic:["通用"],Unresolved:["未解决"],"Page Not Found":["页面未找到"],Name:["姓名"],Email:["电子邮件"],Close:["关闭"],API:["API"],Docs:["文档"],Contribute:["贡献"],"Migrate to SaaS":["迁移至 SaaS"],Continue:["继续"],Auth:["权限"],"Close Account":["关闭账户"],Cancel:["取消"],"Remove Organization":["移除组织"],"This will also remove the following teams and all associated projects:":["本操作会移除所有关注的团队和及其关联的项目。"],"Restore Organization":["恢复组织"],Unsubscribe:["取消订阅"],Appearance:["外观"],Events:["事件"],"Save Changes":["保存更改"],Identities:["身份"],Alerts:["警报"],Project:["项目"],Manage:["管理"],Enable:["启用"],"Back to organization":["回到组织"],Environment:["环境"],Configuration:["配置"],Password:["密码"],Packages:["软件包"],Projects:["项目"],Settings:["设置"],"Sign out":["退出"],Account:["账户"],Avatar:["头像"],Notifications:["通知"],Emails:["Email"],Security:["安全"],Admin:["管理"],Overview:["概览"],Organizations:["组织"],Users:["用户"],"Organization Settings":["组织设置"],Dashboard:["仪表盘"],"Projects & Teams":["项目 和 团队"],Stats:["统计"],Issues:["问题"],"Assigned to Me":["分配给我的"],Bookmarks:["书签"],History:["历史"],Members:["成员"],"API Keys":["API Keys"],"Audit Log":["审计日志"],"Rate Limits":["速率限制"],Repositories:["仓库"],Previous:["上一个"],Next:["下一个"],URL:["URL"],Query:["查询"],Fragment:["片段"],"ID:":["ID:"],"Username:":["用户名:"],Role:["角色"],"Create Issue":["创建问题"],"Link Issue":["连接问题"],Team:["团队"],"New Project":["新项目"],General:["常规"],Tags:["标签"],"Issue Tracking":["问题追踪"],"Release Tracking":["版本追踪"],"Saved Searches":["保存的搜索"],Data:["数据"],"Error Tracking":["错误追踪"],"CSP Reports":["CSP 报告"],"User Feedback":["用户反馈"],"Inbound Filters":["入站过滤器"],"Client Keys (DSN)":["客户端密钥 (DSN)"],Integrations:["集成"],"All Integrations":["所有集成"],"Remove Project":["删除项目"],"Remove Team":["移除团队"],"1 day":["1天"],"Notifications will be delivered at most this often.":["通知最多会发送这么多次。"],"Notifications will be delivered at least this often.":["通知至少会发送这么多次。"],Label:["标签"],"Default Role":["默认角色"],"Do this later …":["稍后处理 ..."],Ignore:["忽略"],"Set up release tracking in order to use this feature.":["设置发布跟踪以使用这个新特性"],Resolve:["解决"],"This event is resolved due to the Auto Resolve configuration for this project":["该事件已通过本项目的自动解决配置解决"],Unresolve:["未解决"],"Nothing to show here, move along.":["没有任何东西可以显示。"],"[author] merged [count] [link:issues]":["[author] 合并[count] [link:issues]"],"[author] released version [version]":["[author] 发布了版本 [version]"],Edit:["编辑"],"Are you sure you wish to delete this comment?":["确定要删除该评论？"],"Posting comment..":["正在发布评论..."],"Updating comment..":["正在更新评论..."],"Unknown error. Please try again.":["未知错误。请重试。"],"Post Comment":["发布评论"],"Save Comment":["保存评论"],Write:["编写"],Preview:["预览"],"Markdown supported":["支持 Markdown"],"Add details or updates to this event":["为该事件添加详细说明或进展"],"No matching users found.":["没有符合条件的用户"],"Filter people":["过滤人员"],"Clear Assignee":["清除分配人"],"Change Photo":["修改照片"],"Avatar Type":["头像类型"],Done:["完成"],"Successfully saved avatar preferences":["成功保存头像。"],"Gravatars are managed through ":["Gravatars 被它管理："],"Success!":["成功！"],"Unable to save changes. Please try again.":["无法保存修改。请重试。"],"An error occurred.":["发生了一个错误。"],"Saving changes..":["正在保存更改..."],"Please enter a valid date in the future":["请输入一个未来的日期"],Date:["日期"],Retry:["重试"],"Unknown Device":["未知的设备"],"Unknown OS":["未知的操作系统"],"Unknown Browser":["未知的浏览器"],"Unknown Runtime":["未知的运行时"],Unknown:["未知"],"Version:":["版本："],"Unknown User":["未知的用户"],Device:["设备"],Collapse:["收起"],Expand:["展开"],Show:["显示"],Hide:["隐藏"],"There was %d error encountered while processing this event":["处理该事件时出现 %d 个错误"],Raw:["原始数据"],"There was an error rendering this data.":["渲染数据时发生错误。"],"This event was reported with an old version of the %s SDK.":["这个事件由旧版本的 %s SDK 提交的。"],"Learn More":["了解更多"],"View Stats":["查看统计"],"Events Per Hour":["每小时事件"],"Additional Data":["附加数据"],"Search breadcrumbs...":["搜索导航条..."],"Sorry, no breadcrumbs match your search query.":["抱歉，没有任何导航条符合搜索条件。"],Exception:["异常"],"Toggle stacktrace order":["切换 stacktrace 顺序"],"most recent call last":["最近的调用最后显示"],"most recent call first":["最近的调用最先显示"],"App Only":["仅限应用程序"],Full:["全部"],Original:["原始的"],Symbolicated:["标记"],Minified:["最小化的"],Unsymbolicated:["取消标记"],Report:["报告"],Help:["帮助"],"CSP Report":["CSP 报告"],"No additional details are available for this frame.":["本帧中没有附加的信息。"],"Toggle context":["显示/隐藏上下文"],"Source Map":["源映射"],Message:["消息"],Params:["参数"],"Query String":["查询字符串"],Body:["正文"],Cookies:["Cookies"],Headers:["标头"],Stacktrace:["Stacktrace"],"Frames %d until %d were omitted and not available.":["栈帧 %d 到 %d 将会被忽略并且不可用。"],Template:["模板"],SDK:["SDK"],ID:["ID"],User:["用户"],"Unable to save your changes. Please ensure all fields are valid and try again.":["无法保存你的修改。确保所有字段都正确，请重试。"],"Create New Issue":["创建新的问题"],"Link with Existing Issue":["链接到存在的问题"],"Unlink Issue":["解除问题连接"],"First seen":["首次出现时间"],"Last seen":["最后出现时间"],"Last 24 Hours":["最近 24 小时"],"Last 30 Days":["最近 30 天"],Release:["版本"],When:["时间"],"External Issues":["外部问题"],"You're receiving updates because you are subscribed to this issue.":["你收到这个更新是因为你订阅了这个问题。"],"You're receiving updates because you are [link:subscribed to workflow notifications] for this project.":["由于 [link:已订阅工作流通知] 你正在接受该项目的更新。"],"You're not subscribed to this issue.":["你没有订阅这个问题。"],Subscribe:["订阅"],"You're receiving updates because you have commented on this issue.":["你收到这个更新是因为你评论了这个问题。"],"You're receiving updates because you were assigned to this issue.":["你收到这个更新是因为你被指派到这个问题。"],"You're receiving updates because you have bookmarked this issue.":["你收到这个更新是因为你将这个问题加入到了书签。"],"You're receiving updates because you have changed the status of this issue.":["你收到这个更新是因为你改变了这个问题的状态。"],Other:["其它"],"No recent data.":["没有最近数据可用"],"There doesn't seem to be any events fitting the query.":["没有与查询记录一致的事件。"],Event:["事件"],"Last 24 hours":["最近 24 小时"],events:["事件"],"Inactive Integrations":["无效集成"],zZz:["zZz"],"Please confirm":["请确认"],"How long should we ignore this issue?":["多久之后忽略这个问题？"],"30 minutes":["30 分钟"],"2 hours":["2 小时"],"24 hours":["24 小时"],Forever:["永远"],"There was an error loading data.":["载入数据出错。"],"There was an error while trying to leave the team.":["尝试离开团队时出错。"],"To view this data you must first join the %s team.":["如需查看该数据，必须首先加入 %s 团队。"],"To view this data you must first request access to the %s team.":["如需查看该数据，必须首先请求访问 %s 团队。"],"Request Pending":["请求待处理"],"Join Team":["加入团队"],"Request Access":["请求访问"],"This issue has been ignored until %s":["这个问题会被忽略直到 %s"],"This issue has been ignored":["该问题已被忽略"],"You will not be notified of any changes and it will not show up by default in feeds.":["您将接不到任何更改通知，订阅信息中默认也不显示。"],"Need help?":["需要帮助？"],"Ask us!":["咨询我们！"],Skip:["跳过"],"[user] completed [dateCompleted]":["[user]完成 [dateCompleted]"],"[user] kicked off [dateCompleted]":["[user] 开始了 [dateCompleted]"],"[user] skipped [dateCompleted]":["[user] 跳过了 [dateCompleted]"],"Set up issue tracking":["设置问题跟踪"],"Link to Sentry issues within your issue tracker":["在你的问题跟踪器中链接到 Sentry 问题页面"],"Set up an alerts service":["设置警报服务"],"Receive Sentry alerts in Slack or HipChat":["在 Slack 或 HipChat 中接收 Sentry 的警报"],"Create a project":["创建新项目"],"Create your first Sentry project":["创建您的第一个Sentry项目"],"Send your first event":["发送你的首个事件"],"Invite team member":["邀请组员"],"Bring your team aboard":["把你的团队带上"],"Add a second platform":["添加二级平台"],"Add Sentry to a second platform":["添加 Sentry 到二级平台"],"Add user context":["添加用户上下文"],"Know who is being affected by crashes":["知道谁被程序崩溃影响了"],"Set up release tracking":["设置发布跟踪"],"Upload sourcemaps":["上传 Sourcemap"],"Deminify javascript stacktraces":["反压缩 Javascript 的堆栈跟踪"],"All Issues":["所有问题"],"You do not have enough permission to create new projects":["您没有足够的创建新项目权限"],"New Team":["新建团队"],"You do not have enough permission to create new teams":["您没有足够的创建新团队权限"],Organization:["组织"],Disable:["禁用"],Releases:["版本"],"Select a project":["选择项目"],"Filter projects":["过滤项目"],"Recent updates from Sentry":["Sentry 有更新。"],"No recent updates from the Sentry team.":["Sentry 团队无更新。"],"Recent status updates":["近期的状态更新"],"Assigned to me":["分配给我的"],"No issues have been assigned to you.":["没有问题指派给你。"],"My Bookmarks":["我的书签"],"You have no bookmarked issues.":["您没有存为书签的问题。"],"Recently Viewed":["近期查看的"],"No recently viewed issues.":["没有近期查看的问题。"],"Required Action:":["需要的动作："],"New Organization":["新组织"],"%(time)s old":["%(time)s 前"],Support:["支持"],"Error: ":["错误："],"Your U2F device reported an error.":["您的 U2F 设备报告了一个错误。"],"This device is already in use.":["这个设备已被使用。"],"The device you used for sign-in is unknown.":["你登录的设备是未知的。"],"Try Again":["重试"],"Email From":["电子邮件来自"],"Email address to be used in From for all outbound email.":["邮件使用所有发信邮件的发件人的地址。"],"SMTP Host":["SMTP 主机"],"SMTP Port":["SMTP 端口"],"SMTP Username":["SMTP 用户名"],"SMTP Password":["SMTP 密码"],"Outbound email":["发出邮件"],"Use TLS?":["使用 TLS？"],"Root URL":["根 URL"],"The root web address which is used to communicate with the Sentry backend.":["web的根地址用来欲Sentry后台通信。"],"Admin Email":["管理员 Email 地址"],"The technical contact for this Sentry installation.":["Sentry 安装中的技术支持"],"Rate Limit":["速率限制"],"The maximum number of events the system should accept per minute. A value of 0 will disable the default rate limit.":["一分钟能接受的最多事件量。设置为0则禁用速率限制。"],"IP Rate Limit":["IP 速率限制"],"The maximum number of times an authentication attempt may be made by a single IP address in a 60 second window.":["单个IP在60秒内最多能尝试鉴权的次数。"],"User Rate Limit":["用户速率限制"],"The maximum number of times an authentication attempt may be made against a single account in a 60 second window.":["单个用户60秒内最多能尝试鉴权的次数。"],"The maximum number of organizations which may be created by a single account in a one hour window.":["单个用户一个小时内最多能创建的组织数量。"],"There was an error creating the issue.":["创建问题时发生错误。"],"There was an error linking the issue.":["连接问题时发生错误。"],"There was an error unlinking the issue.":["解除问题连接时发生错误。"],"Are you sure you want to unlink this issue?":["确定解除与这个问题的连接？"],"An unknown error occurred.":["未知的错误。"],"Associate Identity":["关联身份验证"],"An unknown error occurred. Need help with this? [link:Contact support]":["发生了未知错误。是否需要帮助？[link:Contact support]"],"Unable to change assignee. Please try again.":["无法更改被分配人。请重试。"],"Unable to delete events. Please try again.":["无法删除事件。请重试。"],"The selected events have been scheduled for deletion.":["选定事件已列入删除计划。"],"Unable to merge events. Please try again.":["无法合并事件。请重试。"],"The selected events have been scheduled for merge.":["选定事件已列入合并计划。"],"Unable to update events. Please try again.":["无法更新事件。请重试。"],More:["更多"],"Separate multiple entries with a newline.":["用换行分隔多个条目。"],"Sentry Web API":["Sentry Web API"],"Auth Tokens":["授权令牌"],"Create New Token":["创建新的令牌"],"Authentication tokens allow you to perform actions against the Sentry API on behalf of your account. They're the easiest way to get started using the API.":["授权令牌允许基于你的账户使用 Sentry API。这是简单的使用 API 的开始方式。"],"For more information on how to use the web API, see our [link:documentation].":["更多关于如果使用我们的web API， 请参照 [link:文档]。"],Scopes:["作用域"],"You haven't created any authentication tokens yet.":["你还没创建任何授权令牌。"],"Getting a list of all of your organizations.":["你的组织列表。"],"%s ignored this issue":["%s 忽略了这个问题"],"%s made this issue public":["%s 将该问题设为公开问题"],"%s made this issue private":["%s 将该问题设为隐私问题"],"%(author)s marked this issue as a regression in %(version)s":["%(author)s 在 %(version)s 中将该问题标记为衰退"],"%s marked this issue as a regression":["%s 将该问题标记为衰退"],"%(author)s created an issue on %(provider)s titled %(title)s":["%(author)s 创建了一个在 %(provider)s 上的名为 %(title)s 的问题"],"%s first saw this issue":["%s 首先看到该问题"],"%s assigned this event to themselves":["%s 将该事件分配给自己"],"%(author)s assigned this event to %(assignee)s":["%(author)s 将该事件分配给 %(assignee)s"],"%s assigned this event to an unknown user":["%s 将该事件分配给一个未知用户"],"%s unassigned this issue":["%s 未分配该问题"],"%2$s merged %1$d issue into this issue":["%2$s将%1$d工单合并进了这个工单。"],"Removing comment..":["正在移除评论..."],"%s left a comment":["%s 发表了评论"],"%s marked this issue as resolved":["%s 将该问题标记为已解决"],"%(author)s marked this issue as resolved due to inactivity":["由于这个问题已经不活动，%(author)s 标记了这个问题为已解决"],"%(author)s marked this issue as resolved in %(version)s":["%(author)s 在 %(version)s 中将该问题标记为已解决"],"%s marked this issue as resolved in the upcoming release":["%s 在即将发布的版本中将该问题标记为已解决"],"%s marked this issue as unresolved":["%s 将该问题标记为未解决"],"%(author)s ignored this issue for %(duration)s":["%(author)s 在 %(duration)s 中忽略了这个问题"],"The issue you were looking for was not found.":["您要查找的问题未找到。"],"Delete event..":["删除事件..."],Bookmark:["书签"],"Link Issue Tracker":["链接问题跟踪器"],Delete:["删除"],Oldest:["最早"],Older:["较旧"],Newer:["较新"],Newest:["最新"],"Issue #":["问题 #"],Assigned:["已分配"],Details:["详细信息"],Comments:["评论"],"Sorry, no events match your search query.":["抱歉，找不到满足搜索条件的事件。"],"There don't seem to be any events yet.":["还没出现任何事件。"],"There don't seem to be any hashes for this issue.":["本问题没有任何哈希值。"],"More Details":["详细信息"],"Affected Users":["受影响的用户"],"Export to CSV":["导出到 CSV"],"Note: Percentage of issue is based on events seen in the last 7 days.":["注意：问题的百分比是基于最近 7 天的事件计算而来的。"],"No user reports have been collected for this event.":["没有收集到关于该事件的用户报告。"],"Learn how to integrate User Feedback":["学习如何集成用户反馈"],"We were unable to load the required configuration from the Sentry server. Please take a look at the service logs.":["无法从 Sentry 服务器读取必须的配置。请查看日志文件。"],"Welcome to Sentry":["欢迎来到Sentry"],"Add Member to Organization":["添加成员到组织"],"Add Member":["添加成员"],"Create Project":["创建项目"],"Loading data for your organization.":["正在加载您组织的数据。"],"The organization you were looking for was not found.":["您要查找的组织未找到。"],"Create a New Organization":["创建新组织"],"Organizations represent the top level in your hierarchy. You'll be able to bundle a collection of teams within an organization as well as give organization-wide permissions to users.":["在你的分级系统中，组织为最高级。你可在组织下绑定多组团队，并向用户发放组织内许可。"],"Create Organization":["创建组织"],"Organization Name":["组织名称"],"View more":["显示更多"],"No new issues have been seen in the last week.":["本周以来无新的问题。"],"Apply Changes":["应用更改"],"Saving..":["保存中…"],"Are you sure you want to remove this repository?":["您确定要删除这个仓库吗？"],"Add Repository":["添加仓库"],"Events by Project":["事件（按项目）"],"Events per minute":["每分钟事件数"],Accepted:["已接受"],Dropped:["减少"],"(Rate Limit)":["（速率限制）"],"(Filters)":["(过滤器)"],Total:["总计"],"You don't have any teams for this organization yet. Get started by [link:creating your first team].":["您的该组织还没有任何团队。通过[链接：正在创建第一个团队]开始。"],"Leave Team":["离开团队"],"Team Settings":["团队设置"],"There was an error while trying to join the team.":["尝试加入团队时出错。"],"You are not a member of any teams. [joinLink:Join an existing team] or [createLink:create a new one].":["您不属于任何团队。[joinLink：加入现有团队]或[createLink：创建新团队]。"],"You are not a member of any teams. [joinLink:Join a team].":["你不是任何团队的成员。[joinLink:Join a team]."],"You dont have any teams for this organization yet. Get started by [link:creating your first team].":["您的该组织还没有任何团队。通过[链接：正在创建第一个团队]开始。"],"There are no projects in this team. Get started by [link:creating your first project].":["该团队没有项目。通过[链接：正在创建第一个项目]开始。"],"Events Per Minute":["每分钟事件数"],"Rejected in last 24h":["最近 24 小时被拒绝数"],"View all stats":["查看所有统计数据"],"Your Teams":["您的团队"],"All Teams":["所有团队"],"There are no alerts configured for this project.":["本项目没有警告设置。"],"New Alert Rule":["新的警告规则"],Rules:["规则"],"Edit Rule":["编辑规则"],Digests:["摘要"],"Minimum delivery interval":["最小发送间隔"],"Maximum delivery interval":["最大发送间隔"],"Choose a project":["选择项目"],"Our default list will attempt to ignore common issues and reduce noise.":["我们的默认列表会尝试忽略常见的问题。"],"Additional Ignored Sources":["附加的忽略源"],Integration:["集成"],"Use Default Ignored Sources":["使用默认忽略的源"],"1 hour":["1 小时"],"1 week":["1 周"],"Trending Issues":["热门问题"],"New Issues":["新问题"],"No data available.":["无可用数据。"],"There are no debug symbols for this project.":["本项目没有调试符号。"],UUID:["UUID"],Type:["类型"],Size:["大小"],"Sorry, no events match your filters.":["抱歉，没有满足您过滤条件的事件。"],"There don't seem to be any events.":["没有任何事件"],"Inbound Data Filters":["入站数据过滤器"],"This project cannot be removed. It is used internally by the Sentry server.":["该项目由 Sentry 服务器内部使用，无法删除。"],"This option is enforced by your organization's settings and cannot be customized per-project.":["这个选项已经在你的组织中设置成了强制项，不能给每个项目另外设置。"],"Project Settings":["项目设置"],"Project Details":["项目详细信息"],"Project Name":["项目名称"],"Short name":["简称"],"A unique ID used to identify this project.":["用于识别该项目的唯一 ID。"],"Choose a custom prefix for emails from this project.":["为这个项目选择一个自定义的邮件前缀"],"Event Settings":["事件设置"],"The default selected environment when viewing issues.":["查看问题时默认选择的环境。"],"e.g. production":["例如：生产"],"Auto resolve":["自动解决"],"Automatically resolve an issue if it hasn't been seen for this amount of time.":["如果这个问题在这段时间内没有被查看则自动解决。"],"Enable server-side data scrubbing.":["激活服务端数据清洗。"],"Apply default scrubbers to prevent things like passwords and credit cards from being stored.":["应用默认数据清洗器，以避免类似密码、信用卡等内容被存储。"],"Additional sensitive fields":["附加关键字"],"Additional field names to match against when scrubbing data. Separate multiple entries with a newline.":["收集数据时需要匹配的额外域名。每个关键字另起一行。"],"e.g. email":["例如：邮箱"],"Safe fields":["安全字段"],"Field names which data scrubbers should ignore. Separate multiple entries with a newline.":["数据清洗器忽略的字段。多个字段以换行符分隔。"],"Don't store IP Addresses":["不要存储IP地址"],"Prevent IP addresses from being stored for new events.":["阻止 IP 地址存储在新的事件里"],"Client Security":["客户端安全性"],"Enable JavaScript source fetching":["启用 JavaScript 源读取"],"Allow Sentry to scrape missing JavaScript source context when possible.":["如果可能，允许 Sentry 获取缺失的 JavaScript 源上下文。"],"Security token":["安全令牌"],"You do not have the required permission to remove this project.":["你没有删除该项目的权限。"],"Configure your application":["配置您的应用"],"Get started by selecting the platform or language that powers your application.":["从选择支持您应用的平台或语言开始。"],DSN:["DSN"],"Public DSN":["公用 DSN"],"Got it! Take me to the Issue Stream.":["好的!返回问题列表."],"Full Documentation":["全部文档"],"Configure %(integration)s":["配置 %(integration)s"],Enabled:["已启用"],Created:["创建"],"DSN (Public)":["DSN (公共)"],"CSP Endpoint":["CSP端点"],"Public Key":["公钥"],"Secret Key":["私钥"],"Project ID":["项目ID"],"Client Keys":["客户端密钥"],"Generate New Key":["生成新的Key"],"Reset Configuration":["重置配置"],Version:["版本"],"Enable Plugin":["启用插件"],"Disable Plugin":["禁用插件"],"n/a":["n/a"],"Sorry, no releases match your filters.":["抱歉，没有满足您过滤条件的版本。"],"There don't seem to be any releases yet.":["应该不存在任何版本。"],"Learn how to integrate Release Tracking":["了解如何集成版本追踪"],"Search for a release.":["搜索发布版本"],"Last Event":["最后一个事件"],"Client Configuration":["客户端配置"],Token:["令牌"],Webhook:["Webhook"],"Your deploy token has been regenerated. You will need to update any pre-existing deploy hooks.":["你的部署令牌已经被重新生成，你将需要更新所有之前已经存在的部署钩子。"],"The project you were looking for was not found.":["您要查找的项目未找到。"],"There are no saved searches for this project.":["本项目没有保存的搜索。"],Search:["搜索"],"Sorry, no results match your search query.":["抱歉，找不到满足搜索条件的结果。"],"No user reports have been collected for this project.":["本项目没有收集到用户报告。"],"Show Sentry Branding":["显示 Sentry 品牌"],'Show "powered by Sentry" within the feedback dialog. We appreciate you helping get the word out about Sentry! <3':['在反馈对话框上显示 "由 Sentry 强力驱动"。我们非常感谢你使用 Sentry 这个词! <3'],"View all events seen in this release in the stream":["在流中查看此版本的所有事件"],"Artifact removed.":["工件已被删除。"],"Unable to remove artifact. Please try again.":["无法删除工件，请重试。"],"There are no artifacts uploaded for this release.":["没有上传关于该版本的工件。"],"Delete artifact":["删除工件"],"Are you sure you want to remove this artifact?":["是否要删除该工件？"],"Removing artifact..":["删除工件..."],"First Event":["第一个事件"],Artifacts:["工件"],"View new events seen in this release in the stream":["在流中查看此版本的新事件"],"Review Call Signs for Projects":["查看本项目的呼号"],"Sentry now requires you to specify a call sign (short name) for each project in the organization “%s”. These short names are used to identify the project in the issue IDs.  Ideally they are two or three letter long.":["Sentry 要求你给组织 %s 中的每个项目提供一个呼号 (短名称) 。这个短名称用于在问题中识别项目。一般有 2 - 3 个字母的长度。"],"Projects of teams you are not a member of are not shown.":["你不是团队成员的项目不会被显示。"],"Projects which have been previously reviewed are shown in green.":["之前已被审阅的项目被显示为绿色。"],"Set Call Signs":["设置呼号"],"Failed to set slugs":["设置短连接失败"],"There was an error saving your changes. Make sure all fields are valid and try again.":["保存更改出错。请确保所有字段有效，然后重试。"],"Rule name":["规则名"],"My Rule Name":["我的规则名"],"Every time %s of these conditions are met:":["这些条件中每次有 %s 得以满足："],all:["所有"],any:["任何"],none:["无"],"Take these actions:":["采取以下措施："],"Perform these actions at most once every [frequency] for an issue.":["每个工单每[frequency]至多执行该行为一次。"],"5 minutes":["5 分钟"],"10 minutes":["10  分钟"],"60 minutes":["60 分钟"],"3 hours":["3 小时"],"12 hours":["12 小时"],"one week":["一周"],"30 days":["30天"],"Save Rule":["保存规则"],"API Key":["API Key"],"Allowed Domains":["允许的域名"],Key:["密钥"],Actions:["动作"],Member:["成员"],Action:["动作"],IP:["IP"],Time:["时间"],"No results found.":["没有找到任何结果。"],Any:["任何"],"Sentry keeps track of important events within your organization.":["Sentry 保持跟踪您组织内发生的重要事件。"],"The name of your organization. i.e. My Company":["组织的名称。例如：我的公司"],"A unique ID used to identify this organization.":["一个标识该组织的唯一 ID"],"Early Adopter":["早期使用者"],"Opt-in to new features before they're released to the public.":["试用新的特性"],Membership:["成员"],"The default role new members will receive.":["新成员将接到的默认角色。"],"Open Membership":["开放式群组"],"Allow organization members to freely join or leave any team.":["允许组织成员自愿加入或离开团队。"],"Allow Shared Issues":["允许共享问题"],"Enable sharing of limited details on issues to anonymous users.":["启用共享有限的问题内容给匿名用户。"],"Enhanced Privacy":["增强隐私"],"Enable enhanced privacy controls to limit personally identifiable information (PII) as well as source code in things like notifications.":["启用增强隐私控制，以限制个人可识别信息 (PII) 以及通知之类的源代码。"],"Require Data Scrubber":["需要数据清洗"],"Require server-side data scrubbing be enabled for all projects.":["要求所有项目激活服务端数据清洗。"],"Require Using Default Scrubbers":["要求使用默认的数据清洗器"],"Require the default scrubbers be applied to prevent things like passwords and credit cards from being stored for all projects.":["要求应用默认的数据清洗器，以避免所有项目的类似密码、信用卡的内容被存储。"],"Global safe fields":["全局安全字段"],"Prevent Storing of IP Addresses":["避免存储 IP 地址"],"Preventing IP addresses from being stored for new events on all projects.":["避免所有项目的新事件存储 IP 地址。"],"Pending Access Requests":["等待批准的访问请求"],Basics:["基础"],Status:["状态"],Added:["已添加"],"Invite Link":["邀请链接"],"Generate New Invite":["生成新的邀请"],"Resend Invite":["重新发送邀请"],"Two-factor auth not enabled":["二步验证未启用"],"You do not have enough permission to add new members":["您没有足够的权限添加新成员"],"Invite Member":["邀请新成员"],"e.g. API Team":["例如：API 团队"],"Waiting for events…":["等待事件..."],"Our error robot is waiting to [cross:devour] receive your first event.":["我们的错误处理机器人正在等待[cross:devour]接受你的第一个事件。"],"Installation Instructions":["安装指引"],"Removing events..":["正在移除事件..."],"Merging events..":["正在合并事件..."],"Add to Bookmarks":["添加至书签"],"Remove from Bookmarks":["从书签移除"],"Set status to: Unresolved":["设置状态为：未解决"],"Graph:":["图形："],"24h":["24 小时"],"14d":["14 天"],"%d issue on this page selected.":["选择了本页的 %d 个问题。"],"This action cannot be undone.":["该操作无法撤销。"],"Search for events, users, tags, and everything else.":["搜索事件、用户、标签和其他所有项。"],"Save Current Search":["保存当前搜索"],"Saving this search will give you and your team quick access to it in the future.":["保存搜索可以让你的团队在未来快速的访问到它。"],"Make this the default view for myself.":["将此作为我的默认视图。"],"Make this the default view for my team.":["将此作为我的团队的默认视图"],Save:["保存"],"Custom Search":["自定义搜索"],"There don't seem to be any saved searches yet.":["似乎没有任何已保存的搜索"],"or paste an event id to jump straight to it":["或粘贴事件 ID，直接跳到相应事件"],Tag:["标签"],"key/value pair associated to an issue":["与问题相关的键/值对"],"State of an issue":["问题状态"],"team member assigned to an issue":["分配给问题的团队成员"],"Bookmarked By":["由谁加入书签"],"team member who bookmarked an issue":["标记过问题的团队成员"],Text:["文本"],"Search title and culprit text body":["搜索标题和问题文本正文"],"Sort by":["排序依据"],"Create a New Team":["创建新团队"],"Teams group members' access to a specific focus, e.g. a major product or application that may have sub-projects.":["群组成员可访问特定重点内容，例如，拥有子项目的主打产品或应用。"],"Team Name":["团队名称"],"":{domain:"sentry",plural_forms:"nplurals=1; plural=0;",lang:"zh_CN"}}}},[1560]);
//# sourceMappingURL=zh-cn.js.map