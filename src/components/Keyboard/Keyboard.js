import React from 'react';
import './Keyboard.css';

export default function Keyboard({preset, onKeyClicked}) {
    const onClick = (e) => onKeyClicked(String(e.target.id));

    const getKeyStyle = (keyId) => {
        for(let group of preset.groups) {
            if(group.keys.includes(keyId)) {
                return {boxShadow: `0 0 5px ${group.color}`}
            }
        }

        return {};
    }

    return (
        <ul id="keyboard">
            <li style={getKeyStyle('1')} onClick={onClick} id="1" className="symbol"><span className="off">`</span><span className="on">~</span></li>
            <li style={getKeyStyle('2')} onClick={onClick} id="2" className="symbol"><span className="off">1</span><span className="on">!</span></li>
            <li style={getKeyStyle('3')} onClick={onClick} id="3" className="symbol"><span className="off">2</span><span className="on">@</span></li>
            <li style={getKeyStyle('4')} onClick={onClick} id="4" className="symbol"><span className="off">3</span><span className="on">#</span></li>
            <li style={getKeyStyle('5')} onClick={onClick} id="5" className="symbol"><span className="off">4</span><span className="on">$</span></li>
            <li style={getKeyStyle('6')} onClick={onClick} id="6" className="symbol"><span className="off">5</span><span className="on">%</span></li>
            <li style={getKeyStyle('7')} onClick={onClick} id="7" className="symbol"><span className="off">6</span><span className="on">^</span></li>
            <li style={getKeyStyle('8')} onClick={onClick} id="8" className="symbol"><span className="off">7</span><span className="on">&amp;</span></li>
            <li style={getKeyStyle('9')} onClick={onClick} id="9" className="symbol"><span className="off">8</span><span className="on">*</span></li>
            <li style={getKeyStyle('10')} onClick={onClick} id="10" className="symbol"><span className="off">9</span><span className="on">(</span></li>
            <li style={getKeyStyle('11')} onClick={onClick} id="11" className="symbol"><span className="off">0</span><span className="on">)</span></li>
            <li style={getKeyStyle('12')} onClick={onClick} id="12" className="symbol"><span className="off">-</span><span className="on">_</span></li>
            <li style={getKeyStyle('13')} onClick={onClick} id="13" className="symbol"><span className="off">=</span><span className="on">+</span></li>
            <li style={getKeyStyle('14')} onClick={onClick} id="14" className="delete lastitem">delete</li>
            <li style={getKeyStyle('15')} onClick={onClick} id="15" className="tab">tab</li>
            <li style={getKeyStyle('16')} onClick={onClick} id="16" className="letter">q</li>
            <li style={getKeyStyle('17')} onClick={onClick} id="17" className="letter">w</li>
            <li style={getKeyStyle('18')} onClick={onClick} id="18" className="letter">e</li>
            <li style={getKeyStyle('19')} onClick={onClick} id="19" className="letter">r</li>
            <li style={getKeyStyle('20')} onClick={onClick} id="20" className="letter">t</li>
            <li style={getKeyStyle('21')} onClick={onClick} id="21" className="letter">y</li>
            <li style={getKeyStyle('22')} onClick={onClick} id="22" className="letter">u</li>
            <li style={getKeyStyle('23')} onClick={onClick} id="23" className="letter">i</li>
            <li style={getKeyStyle('24')} onClick={onClick} id="24" className="letter">o</li>
            <li style={getKeyStyle('25')} onClick={onClick} id="25" className="letter">p</li>
            <li style={getKeyStyle('26')} onClick={onClick} id="26" className="symbol"><span className="off">[</span><span className="on">{'{'}</span></li>
            <li style={getKeyStyle('27')} onClick={onClick} id="27" className="symbol"><span className="off">]</span><span className="on">{'}'}</span></li>
            <li style={getKeyStyle('28')} onClick={onClick} id="28" className="symbol lastitem"><span className="off">\</span><span className="on">|</span></li>
            <li style={getKeyStyle('29')} onClick={onClick} id="29" className="capslock">caps lock</li>
            <li style={getKeyStyle('30')} onClick={onClick} id="30" className="letter">a</li>
            <li style={getKeyStyle('31')} onClick={onClick} id="31" className="letter">s</li>
            <li style={getKeyStyle('32')} onClick={onClick} id="32" className="letter">d</li>
            <li style={getKeyStyle('33')} onClick={onClick} id="33" className="letter">f</li>
            <li style={getKeyStyle('34')} onClick={onClick} id="34" className="letter">g</li>
            <li style={getKeyStyle('35')} onClick={onClick} id="35" className="letter">h</li>
            <li style={getKeyStyle('36')} onClick={onClick} id="36" className="letter">j</li>
            <li style={getKeyStyle('37')} onClick={onClick} id="37" className="letter">k</li>
            <li style={getKeyStyle('38')} onClick={onClick} id="38" className="letter">l</li>
            <li style={getKeyStyle('39')} onClick={onClick} id="39" className="symbol"><span className="off">;</span><span className="on">:</span></li>
            <li style={getKeyStyle('40')} onClick={onClick} id="40" className="symbol"><span className="off">'</span><span className="on">&quot;</span></li>
            <li style={getKeyStyle('41')} onClick={onClick} id="41" className="return lastitem">return</li>
            <li style={getKeyStyle('42')} onClick={onClick} id="42" className="left-shift">shift</li>
            <li style={getKeyStyle('43')} onClick={onClick} id="43" className="letter">z</li>
            <li style={getKeyStyle('44')} onClick={onClick} id="44" className="letter">x</li>
            <li style={getKeyStyle('45')} onClick={onClick} id="45" className="letter">c</li>
            <li style={getKeyStyle('46')} onClick={onClick} id="46" className="letter">v</li>
            <li style={getKeyStyle('47')} onClick={onClick} id="47" className="letter">b</li>
            <li style={getKeyStyle('48')} onClick={onClick} id="48" className="letter">n</li>
            <li style={getKeyStyle('49')} onClick={onClick} id="49" className="letter">m</li>
            <li style={getKeyStyle('50')} onClick={onClick} id="50" className="symbol"><span className="off">,</span><span className="on">&lt;</span></li>
            <li style={getKeyStyle('51')} onClick={onClick} id="51" className="symbol"><span className="off">.</span><span className="on">&gt;</span></li>
            <li style={getKeyStyle('52')} onClick={onClick} id="52" className="symbol"><span className="off">/</span><span className="on">?</span></li>
            <li style={getKeyStyle('53')} onClick={onClick} id="53" className="right-shift lastitem">shift</li>
            <li style={getKeyStyle('54')} onClick={onClick} id="54" className="space lastitem">&nbsp;</li>
    </ul>
    )
}