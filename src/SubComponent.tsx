
import Mode from './Mode'

// Feature's model
interface Model {
    msg: string,
    mode: Mode
}

type subModel<T> = T extends Model ? T : never
type setModel<T> = (model: subModel<T>) => void

// Model Subtype
type Props<T> = {
    v: subModel<T>,
    f: setModel<T>,
}

export default function SubComponent<T>({v, f}: Props<T>) {
    return (<>
        <div>
            <p>{v.mode === Mode.Refer? 'ReadOnly': 'Editable'}</p>
            <p>{v.msg}</p>
            <input onChange={(e) => f({...v, msg: e.target.value})} readOnly={v.mode === Mode.Refer} />
        </div>
    </>)
}
