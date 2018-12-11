##$0
在Chrome的Elements面板中，$0关联到当前我们选中的html节点。

理所当然，$1 是我们上一次选择的节点，$2是在那之前选择的节点，等等。一直到 $4

你可以用以上的补充参考来尝试一些相关的操作(例子: $1.appendChild($0))

##$和$$
在你还没有在app中定义 $变量的情况下(例如 jQuery)，$在console中是冗长的函数document.querySelector的一个别名。

但是$$ 能节省更多的时间，因为它不仅仅执行document.QuerySelectorAll并且返回的是一个节点的数组，而不是一个Node list

从本质上说:Array.from(document.querySelectorAll('div')) === $$('div'),但是$$('div')要简短太多了！

##$!
在`Console Importer`的`Chrome`插件的帮助之下，你可以快速的在console中引入和把玩一些npm库。

直接运行例如 $i('lodash') 或者 $i('moment') 然后在几秒钟之后，你就可以获取到lodash / momentjs了。

##copy()
复制文本到剪切板，可以粘贴到本地文本中

##Store as global
右键点击`console`所列出的数据,将其保存为全局变量,变量名为`temp1`、`temp2`...

##Copy HTML (最快的方式)
HTML面板中可以使用`Ctrl`+`c`,或者点击DOM前面的省略号

##console.table
以列表的形式输出数组、类数组对象、对象,当列太多的时候，使用第二个参数，传入你想要展示的列对应的名字

##console.dir
输出DOM节点等

##通过`h`隐藏DOM元素

##HTML面板可拖拽DOM元素

##移动DOM元素
如果你只是想移动你当前选中的元素，在DOM结构中往上一点或者往下一点，而不是拖动和放置，
你同样可以使用[ctrl] + [⬆] / [ctrl] + [⬇] ([⌘] + [⬆] /[⌘] + [⬇] on Mac).

##HTML面板是个编辑器

##使用`Command`(命令)菜单
- 在`Chrome`的调试打开的情况下 按下 [ Ctrl]+[Shift]+[P] (or [⌘]+[Shift]+[P] on Mac)
- 或者使用DevTools 的 dropdown 按钮的这个选项
###切换theme主题
