State(状态)
Actions(动作)
Derivations(派生)


1. 定义 State 并使其可观察
2. 使用 Action 更新 State
3. 创建 Derivations 以便自动对 State 变化进行响应
  3.1. 通过 computed 对派生值进行建模
  3.2. 使用 reaction 对副作用建模
  3.3. 响应式 React 组件
  3.4. 自定义 Reaction

## Core
创建可观察状态
observable 定义一个存储 state 的可追踪字段。
action 将一个方法标记为可以修改 state 的 action。
computed 标记一个可以由 state 派生出新的值并且缓存其输出的 getter