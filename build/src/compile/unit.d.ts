import { Axis } from '../axis';
import { Channel, ScaleChannel, SingleDefChannel } from '../channel';
import { Config } from '../config';
import * as vlEncoding from '../encoding';
import { Encoding } from '../encoding';
import { FieldDef, FieldRefOption } from '../fielddef';
import { Legend } from '../legend';
import { Mark, MarkDef } from '../mark';
import { Domain } from '../scale';
import { SelectionDef } from '../selection';
import { SortField, SortOrder } from '../sort';
import { LayoutSizeMixins, UnitSpec } from '../spec';
import { StackProperties } from '../stack';
import { Dict } from '../util';
import { VgData, VgEncodeEntry, VgLayout, VgScale, VgSignal } from '../vega.schema';
import { AxisIndex } from './axis/component';
import { LegendIndex } from './legend/component';
import { Model, ModelWithField } from './model';
import { RepeaterValue } from './repeater';
import { ScaleIndex } from './scale/component';
/**
 * Internal model of Vega-Lite specification for the compiler.
 */
export declare class UnitModel extends ModelWithField {
    readonly type: 'unit';
    readonly markDef: MarkDef;
    readonly encoding: Encoding<string>;
    readonly specifiedScales: ScaleIndex;
    readonly stack: StackProperties;
    protected specifiedAxes: AxisIndex;
    protected specifiedLegends: LegendIndex;
    readonly selection: Dict<SelectionDef>;
    children: Model[];
    constructor(spec: UnitSpec, parent: Model, parentGivenName: string, parentGivenSize: LayoutSizeMixins, repeater: RepeaterValue, config: Config);
    /**
     * Return specified Vega-lite scale domain for a particular channel
     * @param channel
     */
    scaleDomain(channel: ScaleChannel): Domain;
    hasDiscreteDomain(channel: Channel): boolean;
    sort(channel: Channel): SortField | SortOrder;
    axis(channel: Channel): Axis;
    legend(channel: Channel): Legend;
    private initScales(mark, encoding);
    private initAxes(encoding);
    private initLegend(encoding);
    parseData(): void;
    parseLayoutSize(): void;
    parseSelection(): void;
    parseMarkGroup(): void;
    parseAxisAndHeader(): void;
    assembleScales(): VgScale[];
    assembleSelectionTopLevelSignals(signals: any[]): VgSignal[];
    assembleSelectionSignals(): VgSignal[];
    assembleSelectionData(data: VgData[]): VgData[];
    assembleLayout(): VgLayout;
    assembleLayoutSignals(): VgSignal[];
    assembleMarks(): any[];
    assembleLayoutSize(): VgEncodeEntry;
    protected getMapping(): vlEncoding.Encoding<string>;
    toSpec(excludeConfig?: any, excludeData?: any): any;
    mark(): Mark;
    channelHasField(channel: Channel): boolean;
    fieldDef(channel: SingleDefChannel): FieldDef<string>;
    /** Get "field" reference for vega */
    field(channel: SingleDefChannel, opt?: FieldRefOption): string;
}