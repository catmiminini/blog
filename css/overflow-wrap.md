# overflow-wrap

## overflow-wrap

- normal: 行只能在正常的单词断点处中断。（例如两个单词之间的空格）。
- break-word: 表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。
- anywhere;

## word-break

- normal: 行只能在正常的单词断点处中断。（例如两个单词之间的空格）。
- break-all: 对于 non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
- keep-all: CJK 文本不断行。 Non-CJK 文本表现同 normal。
- break-word: 他的效果是`word-break: normal` 和 `overflow-wrap: anywhere` 的合，不论 `overflow-wrap`的值是多少。

## hyphens

- auto
- none
- manual

## overflow-wrap, word-break, hyphens, text-overflow
