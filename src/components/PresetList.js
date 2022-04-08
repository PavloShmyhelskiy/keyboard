export default function PresetList({ presets, activeIdx, onPresetClick, onCreatePreset }) {
    return (
        <div className="presets">
            <h2>Presets</h2>
            {presets.map((p, idx) => (
                <div key={idx} onClick={() => onPresetClick(idx)} className={`preset ${activeIdx === idx ? 'active' : ''}`}> {p.name || `Preset ${idx + 1}`} </div>
            ))}
            <button className='add-button' onClick={onCreatePreset}>Add new</button>
        </div>
    )
}