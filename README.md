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