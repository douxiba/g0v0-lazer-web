<div align="center">
    <img src="./src/assets/images/hero-image2.png" alt="g0v0 img" height="156">
    <br/>
    <br/>
    <h1>gashamkal</h1>
    <p><b>一套好用的g0v0-lazer服务端前端</b><br/>Powered by Douxiba(bliemhax/kriastans)</p>
</div>

## 运行

```bash
git clone https://github.com/GooGuTeam/gashamkal.git
cd gashamkal
pnpm install
pnpm run dev
```

## 技术栈

- `Astro`: 用于服务端渲染，后端API粘合
- `Lit（Web Components）`：用于实现客户端逻辑
- `UnoCSS`：用于实现样式
- `lucide icons`：内置图标
- `dayjs`：时间的格式化

## 特点

- **i18n 支持**：基于 `translate key` 和 `localized pages`。
- **超低内存占用**：使用 Web Components 技术原生构建，客户端运行毫无压力
- **服务端渲染**：减轻客户端DOM操作压力
- **美观简约的 UI**：比 `GooGuTeam/gusou-lazer-web` 更好用！

## 许可证

GPL-3.0