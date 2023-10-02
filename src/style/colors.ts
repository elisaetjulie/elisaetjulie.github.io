export const alpha = (color: string, opacity: number) => {
  if (!/^#[0-9a-fA-F]{6}$/.test(color))
    throw new Error(`Color ${color} doesn't match hex format`);
  if (opacity < 0 || opacity > 1)
    throw new Error(`Opacity must be between 0 and 1. (recieved ${opacity})`);
  return color + ("0" + Math.round(opacity * 255).toString(16)).slice(-2);
};
