import ColorPicker from "./ColorPicker";

export default function GroupsList({ groups, activeIdx, onColorChanged, onGroupClick, onCreateGroup }) {
    return (
        <div className="groups">
            <h2>Presets</h2>
            {groups.map((g, idx) => (
                <div key={idx} onClick={() => onGroupClick(idx)} className={`group ${activeIdx === idx ? 'active' : ''}`}>
                    <span> {g.name || `Group ${idx + 1}`} </span>
                    <span><ColorPicker color={g.color} onChange={(color) => onColorChanged(idx, color)} /></span>
                </div>
            ))}
            <button className='add-button' onClick={onCreateGroup}>Add new</button>
        </div>
    )
}