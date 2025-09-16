---
title: Redshift 3D 3.0.46 - OCIO v2 and ACES Support
description: Redshift 3D 3.0.46 introduces professional color management with OCIO v2 and ACES support, enhanced Blender integration, and improved rendering features.
keywords: [Redshift 3D, OCIO v2, ACES, color management, Blender, 3D rendering, GPU renderer]
slug: /redshift-3d-3046-ocio-v2-aces
---

# Redshift 3D 3.0.46 - Professional Color Management Update

Redshift 3D 3.0.46 represents a significant update focused on professional color management workflows and improved integration across major 3D platforms. This release introduces OpenColorIO (OCIO) v2 support and Academy Color Encoding System (ACES) integration, enhancing color accuracy for professional visualization workflows.

## Key Features

### Professional Color Management

:::tip Industry Standard Color Pipeline
The addition of OCIO v2 and ACES support brings Redshift in line with industry-standard color management practices used in film, television, and high-end visualization studios.
:::

- **OCIO v2 Support**: Full compatibility with OpenColorIO version 2.0
- **ACES Integration**: Built-in Academy Color Encoding System for standardized color workflows
- **Enhanced Color Management**: Consistent color handling across all supported platforms

### Platform Integration Improvements

:::info Cross-Platform Compatibility
These updates ensure Redshift maintains compatibility with the latest versions of major 3D applications while improving workflow efficiency.
:::

#### Blender Enhancements
- Support for Blender proxies
- Compatibility with Blender 2.93 release
- Basic support for using imported proxies as instantiated objects for particle systems

#### 3ds Max Updates
- New color-managed color picker interface
- Improved RS TriPlanar material editor preview

## Technical Improvements

### EXR Metadata Support
- Custom EXR metadata capabilities
- Available across multiple platforms (Houdini, Katana, Hydra)

### Hair Shader Optimization
- Principled Hair shader now includes trace depth control
- Allows keeping reflection trace depths low globally while maintaining hair quality

### System-Level Changes
- **Filtering Updates**: Default filter size changed from 2.0 to 2.5
- **IC/IPC Working Tree**: Default size increased from 128 to 512
- **Houdini Support**: Updated to versions 18.5.596 and 18.5.563
- **Deprecated Support**: Dropped support for older Houdini versions (18.5.499 and 18.5.462)

## Benefits for Professional Workflows

1. **Improved Color Accuracy**: Professional color pipeline with industry-standard ACES and OCIO v2
2. **Enhanced Workflow**: Better integration with major 3D applications
3. **Greater Flexibility**: Custom EXR metadata support for advanced compositing workflows
4. **Performance Optimization**: Hair rendering improvements with selective trace depth control
5. **Broad Compatibility**: Support for latest software versions across different platforms

:::caution Scene Appearance Changes
This update may change the appearance of existing scenes due to new color management. Filtering changes might also slightly alter render output.
:::

## Important Considerations

:::danger Critical Update Note for C4D Users
Cinema 4D users should backup scenes before updating as this release makes permanent, incompatible changes to scene data format requiring automatic one-time upgrade.
:::

- Existing scenes may require adjustment due to color management changes
- Filtering modifications might affect render output
- C4D scene data format has undergone significant changes