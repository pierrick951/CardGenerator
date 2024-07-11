import { RangeInput } from '../Typscript/TabsType';
import useImageSettingsStore from '../store.image';

const rangeInputs: RangeInput[] = [
  { label: 'Warmth', id: 'warmth', min: 0, max: 100, initialValue: 50 },
  { label: 'Sepia', id: 'sepia', min: 0, max: 10, initialValue: 5 },
  { label: 'Invert', id: 'invert', min: 0, max: 255, initialValue: 0 },
];

function TabsImg() {
  const settings = useImageSettingsStore((state) => state.settings);
  const setSetting = useImageSettingsStore((state) => state.setSetting);

  return (
    <div>
      {rangeInputs.map((input) => (
        <div key={input.id} className="p-2 flex flex-col">
          <label htmlFor={input.id} className="text-zinc-800 font-semibold font-mono text-lg pb-2">
            {input.label}
          </label>
          <input
            type="range"
            id={input.id}
            className="rounded-lg text-xs resize-x h-10 outline-indigo-900"
            min={input.min}
            max={input.max}
            value={settings[input.id]}
            onChange={(e) => setSetting(input.id, Number(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
}

export default TabsImg;
