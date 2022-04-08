import { useMemo } from 'react';
import './App.css';
import GroupsList from './components/GroupsList';
import Keyboard from './components/Keyboard/Keyboard';
import PresetList from './components/PresetList';

import useLocalStorageState from './hooks/usePresets';

function App() {
  const [presets, setPresets] = useLocalStorageState('presets', '[{ "groups": []}]');
  const [activePresetIdx, setActivePresetIdx] = useLocalStorageState('activePreset', '0');
  const [activeGroupIdx, setActiveGroupIdx] = useLocalStorageState('activeGroup', '0');

  const preset = useMemo(() => presets[activePresetIdx], [presets, activePresetIdx])
  const group = useMemo(() => preset.groups[activeGroupIdx], [preset, activeGroupIdx])

  const setActivePreset = (idx) => {
    setActiveGroupIdx(0);
    setActivePresetIdx(idx);
  }
  const createNewPreset = () => setPresets([...presets, {groups: []}]);

  const setActiveGroup = (idx) => setActiveGroupIdx(idx);
  const createNewGroup = () => {
    const newPresets = [...presets];
    newPresets[activePresetIdx] = {
      ...newPresets[activePresetIdx],
      groups: [...newPresets[activePresetIdx].groups, { color: '#111111', keys: []}]
    }
    setPresets(newPresets);
  }
  const onColorChanged = (groupIdx, color) => {
    const newPresets = [...presets];
    const newGroups = [...newPresets[activePresetIdx].groups]

    newGroups[groupIdx].color = color;
    newPresets[activePresetIdx] = {
      ...newPresets[activePresetIdx],
      groups: newGroups
    }
    setPresets(newPresets);
  }

  const onKeyClicked = (keyCode) => {
    if (!group) return;
    
    const newPresets = [...presets];
    const newGroups = newPresets[activePresetIdx].groups.map(group => ({
      ...group,
      keys: group.keys.filter(k => k !== keyCode)
    }))
    newGroups[activeGroupIdx].keys.push(keyCode)

    newPresets[activePresetIdx] = {
      ...newPresets[activePresetIdx],
      groups: newGroups
    }
    setPresets(newPresets);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <PresetList 
          presets={presets} 
          activeIdx={activePresetIdx} 
          onPresetClick={setActivePreset} 
          onCreatePreset={createNewPreset} 
        />
        <GroupsList 
          groups={preset.groups} 
          activeIdx={activeGroupIdx} 
          onGroupClick={setActiveGroup}
          onColorChanged={onColorChanged}
          onCreateGroup={createNewGroup} 
        />
      </div>
      <div className="main">

        <Keyboard preset={preset} onKeyClicked={onKeyClicked} />
      </div>
    </div>
  );
}

export default App;
