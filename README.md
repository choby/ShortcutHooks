# 方便快捷的hooks集合

- useMount: 便捷直观的挂载完成钩子
```typescript
useMount(()=>{
    //mounted
    // your code
});
```

- useState: 针对react原生useState的安全调用, 防止在unmount后useState造成的空指针异常

```typescript
useState(()=>{
    //if commponent unmouted, this code will not execute
},[a]);
```

- useMoment: 重写calendarFormat方法, 生成更符合认知的相对时间
### 项目入口文件调用后即可, 其他地方再使用moment生成相对时间时,就会是被重写后的值

```typescript
    useMoment();
```