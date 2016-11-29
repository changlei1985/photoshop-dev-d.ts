

/**
 * Photoshop主程序
 */
declare const app: Application;

declare function UnitValue(value: any): any;

declare function Layer():any;

interface UnitValue {

}
interface Layer {

}


declare var $: {
    writeln(value: any): void;
    write(value: any): void;

};

interface $ {
    writeln(): void;
    write(value: any): void;
}

//action
interface ActionDescriptor {
    /**
     * Read-only. The number of keys contained in the descriptor.
     */
    readonly count: number;
    /**
     * Read-only. The class name of the referenced
     * actionDescriptor object.
     */
    readonly typename: string;

    /**
     * Clears the descriptor.
     */
    clear(): void;

    /**
     * Erases a key from the descriptor.
     */
    erase(key: number): void;

    /**
     * Creates a descriptor from a stream of bytes; for reading from disk.
     */
    fromStream(value: string): void;

    /**
     * Gets the value of a key of type boolean.
     */
    getBoolean(key: number): boolean;

    /**
     * Gets the value of a key of type class.
     */
    getClass(key: number): number;

    /**
     * Gets raw byte data as a string value.
     */
    getData(key: number): string;

    /**
     * Gets the value of a key of type double.
     */
    getDouble(key: number): number;

    /**
     * Gets the enumeration type of a key.
     */
    getEnumerationType(key: number): number;

    /**
     * Gets the enumeration value of a key.
     */
    getEnumerationValue(key: number): number;

    /**
     * Gets the value of a key of type integer.
     */
    getInteger(key: number): number;

    /**
     * Gets the ID of the Nth key,provided by index.
     */
    getKey(index: number): number;

    /**
     * Gets the value of a key of type large integer.
     */
    getLargeInteger(key: number): number;

    /**
     * ActionList Gets the value of a key of type list.
     */
    getList(key: number): ActionList;

    /**
     * Gets the class ID of an object in a key of type object.
     */
    getObjectType(key: number): number;

    /**
     * Gets the value of a key of type object.
     */
    getObjectValue(key: number): ActionDescriptor;

    /**
     * Gets the value of a key of type File.
     */
    getPath(key: number): File;

    /**
     * Gets the value of a key of type ActionReference.
     */
    getReference(key: number): ActionReference

    /**
     * Gets the value of a key of type string.
     */
    getString(key: number): string;

    /**
     * Gets the type of a key.
     */
    getType(key: number): DescValueType;

    /**
     * Gets the unit type of a key of type UnitDouble.
     */
    getUnitDoubleType(key: number): number;

    /**
     * Gets the value of a key of type UnitDouble.
     */
    getUnitDoubleValue(key: number): number;

    /**
     * Checks whether the descriptor contains the provided key.
     */
    hasKey(key: number): boolean;

    /**
     * Determines whether the descriptor is the same as another descriptor.
     */
    isEqual(otherDesc: ActionDescriptor): boolean;

    /**
     * Sets the value for a key whose type is boolean.
     */
    putBoolean(key: number, value: boolean): void;

    /**
     * Sets the value for a key whose type is class.
     */
    putClass(key: number, value: number): void;

    /**
     * Puts raw byte data as a string value.
     */
    putData(key: number, value: string): void;

    /**
     * Sets the value for a key whose type is double.
     */
    putDouble(key: number, value: number): void;

    /**
     * Sets the enumeration type and value for a key.
     */
    putEnumerated(key: number, enumType: number, value: number): void;

    /**
     * Sets the value for a key whose type is integer.
     */
    putInteger(key: number, value: number): void;

    /**
     * Sets the value for a key whose type is large integer.
     */
    putLargeInteger(key: number, value: number): void;

    /**
     * Sets the value for a key whose type is an ActionList object.
     */
    putList(key: number, value: ActionList): void;

    /**
     * Sets the value for a key whose type is an object, represented by an Action Descriptor.
     */
    putObject(key: number, classID: number, value: ActionDescriptor): void;

    /**
     * Sets the value for a key whose type is path.
     */
    putPath(key: number, value: File): void;

    /**
     * Sets the value for a key whose type is an object reference.
     */
    putReference(key: number, value: ActionReference): void;

    /**
     * Sets the value for a key whose type is string.
     */
    putString(key: number, value: string): void;

    /**
     * Sets the value for a key whose type is a unit value formatted as a double.
     */
    putUnitDouble(key: number, unitID: number, value: number): void;

    /**
     * Gets the entire descriptor as a stream of bytes, for writing to disk.
     */
    toStream(): string;
}


/**
 * This object provides an array-style mechanism for storing data. It can be used for low-level access into Photoshop.
 * This object is ideal when storing data of the same type. All items in the list must be of the same type.
 * You can use the "put" methods, such as putBoolean(), to append new elements, and can clear the entire
 * list using clear(), but cannot otherwise modify the list.
 * Note: The ActionList object is part of the Action Manager functionality. For details on using the Action Manager, see the Photoshop CC 2014 Scripting Guide.
 */
interface ActionList {

    /**
     * Read-only. The number of commands that comprise the action.
     */
    readonly count: number;

    /**
     * Read-only. The class name of the referenced
     */
    readonly typename: string;

    /**
     * Clears the list.
     */
    clear(): void;

    /**
     * Gets the value of a list element of type boolean.
     */
    getBoolean(index: number): boolean;

    /**
     * Gets the value of a list element of type class.
     */
    getClass(index: number): number;

    /**
     * Gets raw byte data as a string value.
     */
    getData(index: number): string;

    /**
     * Gets the value of a list element of type double.
     */
    getDouble(index: number): number;

    /**
     * Gets the enumeration type of a list element.
     */
    getEnumerationType(index: number): number;

    /**
     * Gets the enumeration value of a list element.
     */
    getEnumerationValue(index: number): number;

    /**
     * Gets the value of a list element of type integer.
     */
    getInteger(index: number): number;

    /**
     * Gets the value of a list element of type large integer.
     */
    getLargeInteger(index: number): number;

    /**
     * Gets the value of a list element of type list.
     */
    getList(index: number): ActionList;

    /**
     * Gets the class ID of a list element of type object.
     */
    getObjectType(index: number): number;

    /**
     * Gets the value of a list element of type object.
     */
    getObjectValue(index: number): ActionDescriptor;

    /**
     * Gets the value of a list element of type File.
     */
    getPath(index: number): File;

    /**
     * Gets the value of a list element of type ActionReference.
     */
    getReference(index: number): ActionReference;

    /**
     * Gets the value of a list element of type string.
     */
    getString(index: number): string;

    /**
     * Gets the type of a list element.
     */
    getType(index: number): DescValueType

    /**
     * Gets the unit value type of a list element of type Double.
     */
    getUnitDoubleType(index: number): number;

    /**
     * Gets the unit value of a list element of type double.
     */
    getUnitDoubleValue(index: number): number;

    /**
     * Appends a new value, true or false.
     */
    putBoolean(value: boolean): void;

    /**
     * Appends a new value, a class or data type.
     */
    putClass(value: number): void;

    /**
     * Appends a new value, a string containing raw byte data.
     */
    putData(value: string): void;

    /**
     * Appends a new value, a double.
     */
    putDouble(value: number): void;

    /**
     * Appends a new value, an enumerated(constant) value.
     */
    putEnumerated(enumType: number, value: number): void;

    /**
     * Appends a new value, an integer.
     */
    putInteger(value: number): void;

    /**
     * Appends a new value, a large integer.
     */
    putLargeInteger(value: number): void;

    /**
     * Appends a new value, a nested action list.
     */
    putList(value: ActionList): void;

    /**
     * Appends a new value, an object.
     */
    putObject(classID: number, value: ActionDescriptor): void;

    /**
     * Appends a new value, a path.
     */
    putPath(value: File): void;

    /**
     * Appends a new value, a reference to an object created in the script.
     */
    putReference(value: ActionReference): void;

    /**
     * Appends a new value, a string.
     */
    putString(value: string): void

    /**
     * Appends a new value, a unit/value pair.
     */
    putUnitDouble(classID: number, value: number): void;
}


/**
 * The collection of open Document objects.Access this list through the Application.documents collection property, which is available through the app global variable, or directly at the top level. For example, the following adds a new document to the collection:
 * app.documents.add(800, 500, 72, "myDocument", NewDocumentMode.RGB)
 * —or—
 * documents.add(800, 500, 72, "myDocument", NewDocumentMode.RGB)
 */
interface Documents {
    /**
     * Read-only. The number of elements in the documents collection.
     */
    length: number;
    /**
     * Read-only. The containing application.
     */
    parent: Application;
    /**
     * Read-only. The class name of the referenced documents object.
     */
    typename: string;

    /**
     * Creates a new document object and adds it to this collection.
     * pixelAspectRatio: Default is 1.0, a square aspect ratio.
     * bitsPerChannelType: Default is BitsPerChannelType.EIGHT.
     */
    add(width?: UnitValue, height?: UnitValue, resolution?: number, name?: string, mode?: NewDocumentMode, initialFill?: DocumentFill, pixelAspectRatio?: number[], bitsPerChannel?: BitsPerChannelType, colorProfileName?: string): Document

    /**
     * Gets the first element in the documents collection with the provided name
     */
    getByName(name: string): Document;
}




/**
 * This object provides information about what the action is refering to. For example, when referring to the
name of something you might use keyName. The reference would also need to know what name you are
referring to. In this case you could use classDocument for the name of the document or classLayer for the
name of the layer. It can be used for low-level access into Photoshop.Contains data associated with an ActionDescriptor.
 */
interface ActionReference {
    /**
     * Read-only. The class name of the referenced Action object.
     */
    readonly typename: string;

    /**
     * Gets a reference contained in this reference.
     * Container references provide additional pieces to the reference.
     * This looks like another reference, but it is actually part of the same reference.
     */
    getContainer(): ActionReference;

    /**
     * Gets a number representing the class of the object.
     */
    getDesiredClass(): number;

    /**
     * Gets the enumeration type.
     */
    getEnumeratedType(): number;

    /**
     * Gets the enumeration value.
     */
    getEnumeratedValue(): number;

    /**
     *  Gets the form of this action reference.
     */
    getForm(): ReferenceFormType;

    /**
     *  Gets the identifier value for a reference whose form is identifier.
     */
    getIdentifier(): number;

    /**
     * Gets the index value for a reference in a list or array.
     */
    getIndex(): number;

    /**
     * Gets the name of a reference.
     */
    getName(): string;

    /**
     * Gets the offset of the object’s index value.
     */
    getOffset(): number;

    /**
     * Gets the property ID value.
     */
    getProperty(): number;

    /**
     * Puts a new class form and class type into the reference.
     */
    putClass(desiredClass: number): void;

    /**
     * Puts an enumeration type and ID into a reference along with the desired class for the reference.
     */
    putEnumerated(desiredClass: number, enumType: number, value: number): void;

    /**
     * Puts a new identifier and value into the reference.
     */
    putIdentifier(desiredClass: number, value: number): void

    /**
     * Puts a new index and value into the reference.
     */
    putIndex(desiredClass: number, value: number): void;

    /**
     * Puts a new name and value into the reference.
     */
    putName(desiredClass: number, value: string): void;

    /**
     * Puts a new offset and value into the reference.
     */
    putOffset(desiredClass: number, value: number): void;

    /**
     * Puts a new property and value into the reference.
     */
    putProperty(desiredClass: number, value: number): void;

}


/**
 * The Adobe Adobe Photoshop CC 2014 application object, which is the root of the object model and
 * provides access to all other objects. This object provides application-wide information, such as application
 * defaults and available fonts. It provides many important methods , such as those for opening files and
 * loading documents.
 */
interface Application {
    /**
     * Read-write. The frontmost document.
     * etting this property is equivalent to clicking an open document in the Adobe Photoshop CC 2014
     * application to bring it to the front of the screen.
     * Tip: If there is no open document, accessing this property throws an exception.
     */
    activeDocument: Document;

    /**
     * Read-write. The default background color and color style for documents.
     */
    backgroundColor: SolidColor;

    /**
     * Read-only.Information about the application.
     */
    readonly build: string;

    /**
     * Read-write. The name of the current color settings, as selected with Edit > Color Settings.
     */
    colorSettings: string;

    /**
     * Read-write. The dialog mode for the application, which controls what types of dialogs should be displayed when running scripts.
     */
    displayDialogs: DialogModes;

    /**
     * Read-only. The collection of open documents.
     * This is the primary point of access for documents that are currently open in the application. The array
     * allows you to access any open document, or to iterate through all open documents.
     */
    readonly documents: Documents;

    /**
     * Read-only. The fonts installed on this system.
     */
    readonly fonts: TextFonts;

    /**
     * Read-write. The default foreground color (used to paint, fill, and stroke selections).
     * freeMemory number Read-only. The amount of unused memory available to Adobe Photoshop CC 2014.
     */
    foregroundColor: SolidColor;


    /**
     * Read-only. The language location of the application.
     * An Adobe locale code consists of a 2-letter ISO-639 language code and an optional 2-letter ISO 3166
     * country code separated by an underscore. Case is significant. For example, en_US, en_UK, ja_JP, de_DE,fr_FR.
     */
    readonly locale: string

    /**
     * Read-only. A list of file image types Adobe Photoshop CC 2014 can open.
     * measurementLog MeasurementLog The log of measurements taken.
     * name string Read-only. The application's name.
     * notifiers Notifiers Read-only. The collection of notifiers currently configured (in the Scripts Events Manager menu in
     * the Adobe Photoshop CC 2014 application).
     */
    readonly macintoshFileTypes: string[];

    /**
     * Read-write. True if all notifiers are enabled.
     */
    notifiersEnabled: boolean;

    /**
     * Read-only. The full path to the location of the Adobe Photoshop CC 2014 application.
     */
    path: File;

    /**
     * Read-write. The dialog mode for playback mode, which controls what types of dialog to display when playing back a recorded action with the Actions palette.
     */
    playbackDisplayDialogs: DialogModes;

    /**
     * Read-write. Stores and retrieves parameters used as part of a recorded action. Can be used, for example,to control playback speed.
     */
    playbackParameters: ActionDescriptor;

    /**
     * Read-only. The application preference settings (equivalent to selecting Edit > Preferences in the Adobe Photoshop CC 2014 application in Windows or Photoshop > Preferences in Mac OS).
     */
    readonly preferences: Preferences;

    /**
     * Read-only. The full path to the Preferences folder.
     */
    readonly preferencesFolder: File;

    /**
     * Read-only. Files in the Recent Files list.
     */
    readonly recentFiles: File[];

    /**
     * Read-only. The build date of the Scripting interface.
     */
    readonly scriptingBuildDate: string;

    /**
     * Read-only. The version of the Scripting interface.
     */
    readonly scriptingVersion: string;

    /**
     * Read-only. Runtime details of the application and system.
     */
    readonly systemInformation: string;

    /**
     * Read-only. The class name of the referenced app object.
     */
    readonly typename: string;

    /**
     * Read-only. The version of Adobe Photoshop application you are running.
     */
    version: string;

    /**
     * Read-only. A list of file image extensions Adobe Photoshop CC 2014 can open.
     */
    windowsFileTypes: string[];

    /**
     * Runs the batch automation routine (similar to the File > Automate > Batch command).
     * The inputFiles parameter specifies the sources for the files to be manipulated by the batch command.
     */
    batch(inputFiles: File[], action: string, from: string, option?: BatchOptions): string

    /**
     * Causes a "beep" sound.
     */
    beep(): void;

    /**
     * Makes Adobe Photoshop CC 2014 the active (front-most) application.
     */
    bringToFront(): void;

    /**
     * Converts from a four character code (character ID) to a runtime ID.
     */
    charIDToTypeID(charID: string): number;

    /**
     * Plays an action from the Actions palette. The action parameter is the name of the action, the from parameter is the name of the action set.
     */
    doAction(action: string, from: string): void;

    /**
     * Erases the user object with specified ID value from the Photoshop registry.
     */
    eraseCustomOptions(key: string): void;

    /**
     * Plays an Action Manager event.
     */
    executeAction(eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes): ActionDescriptor;

    /**
     * Obtains information about a predefined or recorded action.
     */
    executeActionGet(reference: ActionReference): ActionDescriptor;

    /**
     * Determines whether the feature specified by name is enabled.
     * The following features are supported as values for name:
     * "photoshop/extended"
     * "photoshop/standard"
     * "photoshop/trial"
     */
    featureEnabled(name: string): boolean;

    /**
     * Retreives user objects in the Photoshop registry for the ID with value key.
     */
    getCustomOptions(key: string): ActionDescriptor;

    /**
     * Returns true if Quicktime is installed.
     */
    isQuicktimeAvailable(): boolean;

    /**
     * Loads a support file (as opposed to a Photoshop image document) from the specified location.
     */
    load(document: File): void;

    /**
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makeContactSheet(inputFiles: File[], options?: ContactSheetOptions): string;

    /**
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makePDFPresentation(inputFiles: File[], outputFiles: File, options?: PresentationOptions): string;

    /**
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makePhotoGallery(inputFolder: File, outputFolder: File, options?: GalleryOptions): string;

    /**
     * DEPRECATED for Adobe Photoshop CC 2014. Use provided script:
     * runphotomergeFromScript = true;
     * $.evalFile( app.path + "Presets/Scripts/Photomerge.jsx")
     * photomerge.createPanorama( fileList, displayDialog );
     * Merges multiple files into one, with user interaction required.
     */
    makePhotomerge(inputFiles: File[]): string;

    /**
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makePicturePackage(inputFiles: File[], options?: PicturePackageOptions): string;

    /**
     * Opens the specified document.
     * Use the optional as parameter to specify the file format using the constants in OpenDocumentType; or, you can specify a file format together with its open options using these
     * objects:
     * CameraRAWOpenOptions
     * DICOMOpenOptions
     * EPSOpenOptions
     * PDFOpenOptions
     * PhotoCDOpenOptions
     * RawFormatOpenOptions
     * Use the optional parameter
     * asSmartObject (default: false) to create a smart object around the opened document.
     * See the Application sample scripts for an example of using the File object in the open method.
     */
    open(document: File, as: Object | OpenDocumentType, asSmartObject?: boolean): Document;

    /**
     * Invokes the Photoshop Open dialog box for the user to select files.
     * Returns an array of File objects for the files selected in the dialog.
     */
    openDialog(): File[];

    /**
     * Purges one or more caches.
     */
    purge(target: PurgeTarget): void;

    /**
     * Saves a customized settings object in the Photoshop registry.
     * key is the unique identifier for your custom settings.
     * customObject is the object to save in the registry.
     * persistent indicates whether the object should persist once the script has finished.
     */
    putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void

    /**
     * Pauses the script while the application refreshes. Use to slow down execution and show the results to the user as the script runs. 
     * Use carefully; your script runs much more slowly when using this method.
     */
    refresh(): void;

    /**
     * Force the font list to get updated.
     */
    refreshFonts(): void;

    /**
     * number Run a menu item given the menu ID.
     */
    runMenuItem(menuID: number): void;

    /**
     * Returns false if dialog is cancelled, true otherwise.
     */
    showColorPicker(): boolean;

    /**
     * Converts from a string ID to a runtime ID.
     */
    stringIDToTypeID(stringID: string): number;

    /**
     * Toggle palette visibility.
     */
    togglePalettes(): void;

    /**
     * Converts from a runtime ID to a character ID.
     */
    typeIDToCharID(typeID: number): string;

    /**
     * Converts from a runtime ID to a string ID.
     */
    typeIDToStringID(typeID: number): string
}

interface Document {
    /**
     *Read-write. The selected channels.
     */
    activeChannels: Channel[];
    /**
     *Read-write. The history state to use with the history brush.
     */
    activeHistoryBrushSource: Guide;
    /**
     *Read-write. The selected HistoryState object.
     */
    activeHistoryState: Guide;
    /**
     *Read-write. The selected layer.
     */
    activeLayer: LayerSet[];
    /**
     *Read-only. The art layers collection.
     */
    readonly artLayers: ArtLayers;
    /**
     *Read-only. The background layer of the document.
     */
    readonly backgroundLayer: ArtLayer;
    /**
     *Read-write. The number of bits per channel.
     */
    bitsPerChannel: BitsPerChannelType;
    /**
     *Read-only. The channels collection.
     */
    readonly channels: Channels;
    /**
     *Read-write. The name of the color profile. Valid only when colorProfileType  = ColorProfile.CUSTOM or WORKING.
     */
    colorProfileName: string;
    /**
     *Read-write. Whether the document uses the working color profile, a custom profile, or no profile.
     */
    colorProfileType: ColorProfileType;
    /**
     *Read-only. The current color samplers associated with this document.
     */
    readonly colorSamplers: ColorSamplers;
    /**
     *Read-only. The color channels that make up the document; for instance, the Red, Green, and Blue channels for an RGB document.
     */
    readonly componentChannels: Channel[];
    /**
     *Read-only. The current count items.Note:  For additional information about count items, see Adobe Photoshop CC 2014 help on the Count Tool.
     */
    readonly countItems: CountItems;
    /**
     *Read-only. The full path name of the document.
     */
    readonly fullName: File;
    /**
     *Read-only. The guides collection.
     */
    readonly guides: Guides;
    /**
     *Read-only. The height of the document (unit value).
     */
    readonly height: UnitValue;
    /**
     *Read-only. A histogram showing the number of pixels at each color intensity level for the composite channel. The array c ontains 256 members.Valid only when mode  = DocumentMode.RGB, CMYK; or INDEXEDCOLOR.
     */
    readonly histogram: number[];
    /**
     *Read-only. The history states collection.
     */
    readonly historyStates: HistoryStates;
    /**
     *Read-only. Metadata about the document.
     */
    readonly info: DocumentInfo;
    /**
     *Read-only. The layer compositions collection.
     */
    readonly layerComps: LayerComps;
    /**
     *Read-only. The layers collection.
     */
    readonly layers: Layers;
    /**
     *Read-only. The layer set collection.
     */
    readonly layerSets: LayerSets;
    /**
     *Read-only. True if the document a is workgroup document.
     */
    readonly managed: boolean;
    /**
     *Read-only. The measurement scale for the document.Note:  The measurement scale feature is available in the Extended version only.
     */
    readonly measurementScale: MeasurementScale;
    /**
     *Read-only. The color profile.
     */
    readonly mode: DocumentMode;
    /**
     *Read-only. The document's name.
     */
    readonly name: string;
    /**
     *Read-only. The application object that contains this document.
     */
    readonly parent: Application;
    /**
     *Read-only. The path to the document.
     */
    readonly path: File;
    /**
     *Read-only. The path items collection.
     */
    readonly pathItems: PathItems;
    /**
     *Read-write. The (custom) pixel aspect ratio to use.
     */
    pixelAspectRatio: number[];
    /**
     *Read-only. The print settings for the document.
     */
    readonly printSettings: DocumentPrintSettings;
    /**
     *Read-write. True if the document is in Quick Mask mode.
     */
    quickMaskMode: boolean;
    /**
     *Read-only. The document’s resolution (in pixels per inch).
     */
    readonly resolution: number;
    /**
     *Read-only. True if the document has been saved since the last change.
     */
    readonly saved: boolean;
    /**
     *Read-only. The selected area of the document.
     */
    readonly selection: Selection;
    /**
     *Read-only. The class name of the Document object.
     */
    readonly typename: string;
    /**
     *Read-only. The width of the document (unit value).
     */
    readonly width: UnitValue;
    /**
     *Read-only. XMP metadata for the document. Camera RAW settings for the image are stored here for example.
     */
    readonly xmpMetadata: xmpMetadata;
    /**
     *Counts the number of objects in a document. Available in the Extended Version only. Creates a CountItem object for each object counted. For additional information about how to set up objects to count, see the
     *Count Tool in the Adobe Photoshop CC 2014 Help
     */
    autoCount(channel: Channel, threshold: number): void;
    /**
     *Changes the color profile of the document.
     */
    changeMode(destinationMode: ChangeMode, options?: BitmapConversionOptions | IndexedConversionOptions): void;
    /**
     *Closes the document. If any changes have been made, the script presents an alert with three options: save, do not save, prompt to save. The optional parameter specifies a selection in the alert box (default: S
    aveOptionsType.PROMPTTOSAVECHANGES).
     */
    close(saving?: SaveOptions): void;
    /**
     *Changes the color profile. The destinationProfile parameter must be either a string that names the color mode or Working RGB,Working CMYK, Working Gray, Lab Color (meaning one of the working color spaces or La
    b color).
     */
    convertProfile(destinationProfile: string, intent: Intent, blackPointCompensatio: boolean, dither?: boolean): void;
    /**
     *Crops the document. The bounds parameter is an array of four coordinates for the region remaining after cropping, [left, top, right, bottom].
     */
    crop(bounds: UnitValue[], angle?: number, width?: UnitValue, height?: UnitValue): void;
    /**
     *Creates a duplicate of the document object. The optional parameter name provides the name for the duplicated document. The optional parameter mergeLayersOnly indicates whether to only duplicate merged layers.
     */
    duplicate(name?: string, mergeLayersOnly?: boolean): Document;
    /**
     *Exports the paths in the document to an Illustrator file, or exports the document to a file with Web or device viewing optimizations.This is equivalent to choosing File > Export > Paths To Illustrator, or File
    > Save For Web and Devices.
    */
    exportDocument(exportIn: File, exportAs?: ExportType, options?: ExportOptionsIllustrator | ExportOptionsSaveForWeb): void;
    /**
     *Flattens all layers in the document.
     */
    flatten(): void;
    /**
     *Flips the image within the canvas in the specified direction.
     */
    flipCanvas(direction: Direction): void;
    /**
     *Imports annotations into the document.
     */
    importAnnotations(file: File): void;
    /**
     *Flattens all visible layers in the document.
     */
    mergeVisibleLayers(): void;
    /**
     *Pastes the contents of the clipboard into the document. If the optional argument is set to true and a selection is active, the contents are pasted into the selection.
     */
    paste(intoSelection?: boolean): ArtLayer;
    /**
     *Prints the document.
     */
    print(sourceSpace?: SourceSpaceType, printSpace?: string, intent?: Intent, blackPointCompensation?: boolean): void;
    /**
     *Print one copy of the document.
     */
    printOneCopy(): void;
    /**
     *Rasterizes all layers.
     */
    rasterizeAllLayers(): void;
    /**
     *Record measurements of document.
     */
    recordMeasurements(source?: MeasurementSource, dataPoints?: string[]): void;
    /**
     *Changes the size of the canvas to display more or less of the image but does not change the image size. See resizeImage.
     */
    resizeCanvas(width?: UnitValue, height?: UnitValue, anchor?: AnchorPosition): void;
    /**
     *Changes the size of the image.The amount parameter controls the amount of noise value when using preserve details (Range: 0 - 100).
     */
    resizeImage(width?: UnitValue, height?: UnitValue, resolution?: number, resampleMethod?: ResampleMethod, amount?: number): void;
    /**
     *Expands the document to show clipped sections.
    */
    revealAll(): void;
    /**
     *Rotates the canvas (including the image) in clockwise direction.
    */
    rotateCanvas(angle: number): void;
    /**
     *Saves the document.
    */
    save(): void;
    /**
     *Saves the document in a specific format.Specify the save options appropriate to the format by passing one of these objects:
    */
    saveAs(saveIn: File, options?: Object, asCopy?: boolean, extensionType?: Extension): void;
    /**
     *Splits the document channels into separate images.
    */
    splitChannels(): Document[];
    /**
     *Provides a single entry in history states fo the entire script provided by javaScriptString. Allows a single undo for all actions taken in the script.
    */
    suspendHistory(historyString: string, javaScriptString: string): void;
    /**
     *Applies trapping to a CMYK document. Valid only when docRef.mode = DocumentMode.CMYK.
    */
    trap(width: number): void;

    /**
     * Trims the transparent area around the image on the specified sides of the canvas.Default is true for all Boolean parameters.
     */
    trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void;

}

/**
 * The collection of layer objects, including ArtLayer and LayerSet objects, in the document. Access through Document.layers, or the LayerSet.layers collections properties.
 * For example, this uses the length property to count the number of layer objects in the active document,
 * then displays the number on the screen:
 *  var layerNum = app.activeDocument.layers.length
 *  alert(layerNum)
 */
interface Layers {
    /**
     * Read-only. The number of elements in the layers collection.
     */
    readonly length: number;
    /**
     * Read-only. The containing document or layer set.
     */
    parent: Document | LayerSet;
    /**
     * Read-only. The class name of the referenced layers object.
     */
    typename: string;
    /**
     * Gets the first element in the layers collection with the provided name.
     */
    getByName(name: string): Layer;

    /**
     * Removes all layers from the collection.
     */
    removeAll(): void;
}

/**
 * A group of layer objects, which can include ArtLayer objects and other (nested) LayerSet objects. A single command can manipulate all layers in the set.
 * Access top-level layers sets in a document through the Document.layerSets collection. You can access a layer set by name. 
 * For example, the following sets the allLocked value for "myLayerSet": var layerSetRef = app.activeDocument.layerSets.getByName("myLayerSet");
 *      layerSetRef.allLocked = true
 * Access nested layer sets through the LayerSet.layerSets collection in the parent set. For example:
 *      app.activeDocument.layerSets[0].layerSets[0];
 */
interface LayerSet {
    /**
 *Read-write. True if the contents in the layers in this set are not editable.
 */
    allLocked: boolean;
    /**
     *Read-only. The art layers in this layer set.
     */
    readonly artLayers: ArtLayers;
    /**
     *Read-write. The blend mode to use for the layer set.
     */
    blendMode: BlendMode;
    /**
     *Read-only. The bounding rectangle of the layer set.
     */
    readonly bounds: UnitValue[];
    /**
     *Read-write. The channels enabled for the layer set; must be a list of component channels. See Channel.kind.
     */
    enabledChannels: Channel[];
    /**
     *Read-only. The layers in this layer set.
     */
    readonly layers: Layers;
    /**
     *Read-only. Nested layer sets contained within this layer set.
     */
    readonly layerSets: LayerSets;
    /**
     *Read-only. The layers linked to this layerSet object.
     */
    readonly linkedLayers: ArtLayer[] | LayerSet;
    /**
     *Read-write. The name of this layer set.
     */
    name: string;
    /**
     *Read-write. The master opacity of the set.
     */
    opacity: number[];
    /**
     *Read-only. The containing document or layer set.
     */
    readonly parent: Document | LayerSet;
    /**
     *Read-only. The class name of the referenced LayerSet object.
     */
    readonly typename: string;
    /**
     *Read-write. True if the set is visible.
     */
    visible: boolean;

    /**
     * Creates a duplicate of the object.    
     */
    duplicate(relativeObject?: ArtLayer | LayerSet, insertionLocation: ElementPlacement): LayerSet;

    /**
     * Links the layer set with another layer.
     */
    link(withs: ArtLayer | LayerSet): void;

    /**
     * Merges the layerset; returns a reference to the art layer created by this method.
     */
    merge(): ArtLayer;

    /**
     * Moves the object.
     */
    move(relativeObject: ArtLayer | LayerSet, insertionLocation: ElementPlacement): void;

    /**
     * Deletes the object.
     */
    remove(): void;

    /**
     * Resizes all layers in the layer set to to the specified dimensions (as a percentage of its current size) and places the layer set in the specified position.
     */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void;

    /**
     * Rotates all layers in the layer set around the specified anchor point (default: AnchorPosition.MIDDLECENTER)
     */
    rotate(angle: number, anchor?: AnchorPosition): void;

    /**
     * Moves the position relative to its current position.
     */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void;

    /**
     * Unlinks the layer set.
     */
    unlink(): void;
}


/**
 * Options for a picture package created with Application.makePicturePackage().
 */
interface PicturePackageOptions {
    /**
     *Read-write. The content information (default: PicturePackageTextType.NONE).
     */
    content: PicturePackageTextType;
    /**
     *Read-write. True if all layers in the final document are flattened (default: true).
     */
    flatten: boolean;
    /**
     *Read-write. The font used for security text (default: GalleryFontType.ARIAL).
     */
    font: GalleryFontType;
    /**
     *Read-write. The font size used for security text (default: 12).
     */
    fontSize: number;
    /**
     *Read-write. The layout to use to generate the picture package (default: "(2)5x7").
     */
    layout: string;
    /**
     *Read-write. Read-write. The color profile to use as the document mode (default: NewDocumentMode.RGB).
     */
    mode: NewDocumentMode;
    /**
     *Read-write. The web page security opacity as a percent (default: 100).
     */
    opacity: number;
    /**
     *Read-write. The resolution of the document in pixels per inch (default: 72.0).
     */
    resolution: number;
    /**
     *Read-write. The picture package custom text. Valid only when content  = PicturePackageType.USER.
     */
    text: string;
    /**
     *Read-write. The color to use for security text.
     */
    textColor: RGBColor;
    /**
     *Read-write. The security text position (default: GallerySecurityTextPositionType. CENTERED).
     */
    textPosition: GallerySecurityTextPositionType;
    /**
     *Read-write. The orientation to use for security text (default: GallerySecurityTextRotateType.ZERO).
     */
    textRotate: GallerySecurityTextRotateType;
    /**
     *Read-only. The class name of the referenced PicturePackageOptions object.
     */
    readonly typename: string;

}


interface RGBColor {
    /**
     *Read-write. The blue color value (default: 255).
     */
    blue: number[];
    /**
     *Read-write. The green color value (default: 255)
     */
    green: number[];
    /**
     *Read-write. The hexadecimal representation of the color.
     */
    hexValue: string;
    /**
     * Read-write. The red color value (default: 255)
     */
    red: number[];
    /**
     *Read-only. The class name of the referenced RGBColor object.
     */
    readonly typename: string;

}


/**
 * Options for the bannerOptions property of the GalleryOptions object.
 * Tip: You can preserve default values for many of these properties by setting the GalleryOptions property
 * preserveAllMetadata to true; this is the same as choosing File > Automate > Web Photo Gallery, and 
 * then choosing Preserve all metadata in the Options area of the Web Photo Gallery dialog.
 */
interface GalleryBannerOptions {
    /**
     *Read-write. The web photo gallery contact info.
     */
    contactInfo: string;
    /**
     *Read-write. The web photo gallery date (default: current date).
     */
    date: string;
    /**
     *Read-write. The font setting for the banner text (default: GalleryFontType.ARIAL).
     */
    font: GalleryFontType;
    /**
     *Read-write. The font size for the banner text (default: 3).
     */
    fontSize: number[];
    /**
     *Read-write. The web photo gallery photographer.
     */
    photographer: string;
    /**
     *Read-write. The web photo gallery site name (default: Adobe Web Photo Gallery).
     */
    siteName: string;
    /**
     *Read-only. The class name of the referenced galleryBannerOptions object.
     */
    readonly typename: string;

}

/**
 * Options for the customColorOptions property of the GalleryOptions object.
 * Tip: You can preserve default values for many of these properties by setting the GalleryOptions property
 * preserveAllMetadata to true; this is the same as choosing File > Automate > Web Photo Gallery, and
 * then choosing Preserve all metadata in the Options area of the Web Photo Gallery dialog.
 */
interface GalleryCustomColorOptions {
    /**
     *Read-write. The color to use to indicate an active link.
     */
    activeLinkColor: RGBColor;
    /**
     *Read-write. The background color.
     */
    backgroundColor: RGBColor;
    /**
     *Read-write. The banner color.
     */
    bannerColor: RGBColor;
    /**
     *Read-write. The color to use to indicate a link.
     */
    linkColor: RGBColor;
    /**
     *Read-write. The text color.
     */
    textColor: RGBColor;
    /**
     *Read-only. The class name of the referenced galleryCustomColorOptions object.
     */
    readonly typename: string;
    /**
     *Read-write. The color to use to indicate a visited link.
     */
    visitedLinkColor: RGBColor;

}

interface GalleryImagesOptions {
    /**
     *Read-write. The size (in pixels) of the border that separates images (default: 0).
     */
    border: number[];
    /**
     *Read-write. True to generate image captions (default: false).
     */
    caption: boolean;
    /**
     *Read-write. The resized image dimensions in pixels (default: 350).Valid only when resizeImages  = true.
     */
    dimension: number;
    /**
     *Read-write. The font to use for image captions (default: GalleryFontType.ARIAL).
     */
    font: GalleryFontType;
    /**
     *Read-write. The font size for image captions (default: 3).Valid only when caption  = true.
     */
    fontSize: number[];
    /**
     *Read-write. The quality setting for a JPEG image (default: 5).
     */
    imageQuality: number[];
    /**
     *Read-write. True to include copyright information in captions (default: false).Valid only when caption  = true.
     */
    includeCopyright: boolean;
    /**
     *Read-write. True to include the credits in image captions (default: false).Valid only when caption  = true.
     */
    includeCredits: boolean;
    /**
     *Read-write. True to include the file name in image captions (default: true).Valid only when caption  = true.
     */
    includeFilename: boolean;
    /**
     *Read-write. True to include the title in image captions (default: false).Valid only when caption  = true.
     */
    includeTitle: boolean;
    /**
     *Read-write. True to add numeric links (default: true).
     */
    numericLinks: boolean;
    /**
     *Read-write. The image dimensions to constrain in the gallery image (default:GalleryConstrainType.CONSTRAINBOTH). Valid only when resizeImages  = true.
     */
    resizeConstraint: GalleryConstrainType;
    /**
     *Read-write. True to automatically resize images for placement on the gallery pages (default: true).
     */
    resizeImages: boolean;
    /**
     *Read-only. The class name of the referenced galleryImagesOptions object.
     */
    readonly typename: string;

}


/**
 * Options for a Web photo gallery, created with Application.makePhotoGallery().
 * Tip: You can preserve default values for many of these properties by choosing File > Automate > Web Photo Gallery, 
 * and then choosing Preserve all metadata in the Options area of the Web Photo Gallery dialog.
 */
interface GalleryOptions {
    /**
     *Read-write. True to add width and height attributes for images (default: true).
    */
    addSizeAttributes: boolean;
    /**
     *Read-write. The options related to banner settings.
     */
    bannerOptions: GalleryBannerOptions;
    /**
     *Read-write. The options related to custom color settings.
     */
    customColorOptions: GalleryCustomColorOptions;
    /**
     *Read-write. The email address to show on the web page.
     */
    emailAddress: string;
    /**
     *Read-write. The options related to images settings.
     */
    imagesOptions: GalleryImagesOptions;
    /**
     *Read-write. True to include all files found in sub folders of the input folder (default: true).
     */
    includeSubFolders: boolean;
    /**
     *Read-write. The style to use for laying out the web page (default: Centered Frame 1 - Basic).
     */
    layoutStyle: string;
    /**
     *Read-write. True to save metadata (default: false).
     */
    preserveAllMetadata: boolean;
    /**
     *Read-write. The options related to security settings.
     */
    securityOptions: GallerySecurityOptions;
    /**
     *Read-write. The options related to thumbnail image settings.
     */
    thumbnailOptions: GalleryThumbnailOptions;
    /**
     *Read-only. The class name of the referenced galleryOptions object.
     */
    readonly typename: string;
    /**
     *Read-write. True to use the short web page extension .htm. If false, use the web page extension .html (default: true).
     */
    useShortExtension: boolean;
    /**
     *Read-write. True to use UTF-8 encoding for the web page (default: false).
     */
    useUTF8Encoding: boolean;

}


interface ContactSheetOptions {
    /**
     *Read-write. True to place the images horizontally (left to right, then top to bottom) first (default: true).
     */
    acrossFirst: boolean;
    /**
     *Read-write. True to rotate images for the best fit (default: false).
     */
    bestFit: boolean;
    /**
     *Read-write. True to use the filename as a caption for the image (default: true).
     */
    caption: boolean;
    /**
     *Read-write. The number of columns to include (default: 5).
     */
    columnCount: number[];
    /**
     *Read-write. True to flatten all layers in the final document (default: true).
     */
    flatten: boolean;
    /**
     *Read-write. The font used for the caption (default: GalleryFontType.ARIAL).
     */
    font: GalleryFontType;
    /**
     *Read-write. The font size to use for the caption (default: 12).
     */
    fontSize: number;
    /**
     *Read-write. The height (in pixels) of the resulting document (default: 720).
     */
    height: number[];
    /**
     *Read-write. The horizontal spacing (in pixels) between images (default: 1).
     */
    horizontal: number;
    /**
     *Read-write. The document color mode (default: NewDocumentMode.RGB).
     */
    mode: NewDocumentMode;
    /**
     *Read-write. The resolution of the document in pixels per inch (default: 72.0).
     */
    resolution: number[];
    /**
     *Read-write. The number of rows to use (default: 6).
     */
    rowCount: number[];
    /**
     *Read-only. The class name of the referenced contactSheetOptions object.
     */
    readonly typename: string;
    /**
     *Read-write. True to auto space the images (default: true).
     */
    useAutoSpacing: boolean;
    /**
     *Read-write. The vertical spacing (in pixels) between images (default: 1).Valid only when useAutoSpacing = false.
     */
    vertical: number[];
    /**
     *Read-write. The width (in pixels) of the resulting document (default: 576).
     */
    width: number[];

}

interface PresentationOptions {
    /**
 *Read-write. True to auto advance images when when viewing the presentation (default: true). Valid only when presentation  = true.
 */
    autoAdvance: boolean;
    /**
     *Read-write. True to include the file name for the image (default: false).
     */
    includeFilename: boolean;
    /**
     *Read-write. The time in seconds before the view is auto advanced (default: 5). Valid only when autoAdvance  = true.
     */
    interval: number[];
    /**
     *Read-write. True to begin the presentation again after the last page (default: false). Valid only when autoAdvance  = true.
     */
    loop: boolean;
    /**
     *Read-write. The magnification type to use when viewing the image.
     */
    magnification: MagnificationType;
    /**
     *Read-write. Options to use when creating the PDF file.
     */
    PDFFileOptions: PDFSaveOptions;
    /**
     *Read-write. True if the output will be a presentation (default: false); when false, the output is a Multi-Page document.
     */
    presentation: boolean;
    /**
     *Read-write. The method for transition from one image to the next (default: TransitionType.NONE). Valid only when autoAdvance  = true. .
     */
    transition: TransitionType;
    /**
     *Read-only. The class name of the referenced PresentationOptions object.
     */
    readonly typename: string;

}

/**
 * Options for running a batch operation using the Application.batch() method.
 * JavaScript only supports folders as sources for batch commands. Specify the batch source folder as the inputFiles parameter of the Application.batch() method.
 */
interface BatchOptions {
    /**
 *Read-write. The type of destination for the processed files (default: BatchDestinationType.NODESTINATION).
 */
    destination: BatchDestinationType;
    /**
     *Read-write. The folder location for the processed files.Valid only when destination = BatchDestinationType.FOLDER.
     */
    destinationFolder: Folder;
    /**
     *Read-write. The file in which to log errors encountered. To display errors on the screen (and stop batch processing when errors occur) leave blank.
     */
    errorFile: File;
    /**
     *Read-write. A list of file naming options (maximum: 6). Valid only when destination = BatchDestinationType.FOLDER.
     */
    fileNaming: FileNamingType[];
    /**
     *Read-write. True to make the final file names Macintosh compatible (default: true). Valid only when destination = BatchDestinationType.FOLDER.
     */
    macintoshCompatibl: boolean;
    /**
     *Read-write. True to override action open commands (default: false).
     */
    overrideOpen: boolean;
    /**
     *Read-write. True to override save as action steps with the specified destination (default: false). Valid only when destination = BatchDestinationType.FOLDER or SAVEANDCLOSE.
     */
    overrideSave: boolean;
    /**
     *Read-write. The starting serial number to use in naming files (default: 1). Valid only when destination = BatchDestinationType.FOLDER.
     */
    startingSerial: number;
    /**
     *Read-write. True to suppress the file open options dialogs (default: false).
     */
    suppressOpen: boolean;
    /**
     *Read-write. True to suppress the color profile warnings (default: false).
     */
    suppressProfile: boolean;
    /**
     *Read-only. The class name of the referenced batchOptions object.
     */
    readonly typename: string;
    /**
     *Read-write. True to make the final file name Unix compatible (default: true). Valid only when destination = BatchDestinationType.FOLDER.
     */
    unixCompatible: boolean;
    /**
     *Read-write. True to make the final file names Windows compatible (default: true). Valid only when destination = BatchDestinationType.FOLDER.
     */
    windowsCompatible: boolean;

}

/**
 * Describes a font that is available to the application. Access this object in the Application.fonts collection.
 * For example:
 * var myFont = app.fonts.getByName("ArialMT");
 */
interface TextFonts {
    /**
     * Read-only. The font family.
     */
    family: string;
    /**
     * Read-only. The name of the font.
     */
    name: string;
    /**
     * Read-only. The containing application.
     */
    parent: Application;
    /**
     * Read-only. The PostScript name of the font.
     */
    postScriptName: string;
    /**
     * Read-only. The font style.
     */
    style: string;
    /**
     * Read-only. The class name of the referenced TextFont object.
     */
    typename: string;
}

interface Preferences {
    /**
     *Read-write. The path to an additional plug-in folder.
     */
    additionalPluginFolder: File;
    /**
     *Read-write. The preferred policy for writing file extensions in Windows.
     */
    appendExtension: SaveBehavior;
    /**
     *Read-write. True to ask the user to verify layer preservation options when saving a file in TIFF format.
     */
    askBeforeSavingLayeredTIFF: boolean;
    /**
     *Read-write. True to automatically update open documents.
     */
    autoUpdateOpenDocuments: boolean;
    /**
     *Read-write. True to beep when a process finishes.
     */
    beepWhenDone: boolean;
    /**
     *Read-write. True to display component channels in the Channels palette in color.
     */
    colorChannelsInColor: boolean;
    /**
     *Read-write. The preferred color selection tool.
     */
    colorPicker: ColorPicker;
    /**
     *Read-write. The width of the column gutters (in points).
     */
    columnGutter: number[];
    /**
     *Read-write. Column width (in points)
     */
    columnWidth: number[];
    /**
     *Read-write. True to automatically make the first snapshot when a new document is created.
     */
    createFirstSnapshot: boolean;
    /**
     *Read-write. True if dynamic color sliders appear in the Color palette.
     */
    dynamicColorSliders: boolean;
    /**
     *Read-write. The preferred level of detail in the history log. Valid only when useHistoryLog  = true.
     */
    editLogItems: EditLogItemsType;
    /**
     *Read-write. True to retain Adobe Photoshop CC 2014 contents on the clipboard after you exit the application.
     */
    exportClipboard: boolean;
    /**
     *Read-write. The preferred type size to use for font previews in the type tool font menus.
     */
    fontPreviewSize: FontPreviewType;
    /**
     *Read-write. True to show image preview as a full size image, false to show thumbnail (in Mac OS only).
     */
    fullSizePreview: boolean;
    /**
     *Read-write. Opacity value as a percentage.
     */
    gamutWarningOpacity: number[];
    /**
     *Read-write. The preferred size to use for squares in the grid.
     */
    gridSize: GridSize;
    /**
     *Read-write. The preferred formatting style for non-printing grid lines.
     */
    gridStyle: GridLineStyle;
    /**
     *Read-write. Number of grid subdivisions.
     */
    gridSubDivisions: number[];
    /**
     *Read-write. The preferred formatting style for non-printing guide lines.
     */
    guideStyle: GuideLineStyle;
    /**
     *Read-write. True to use icon previews (in Mac OS only).
     */
    iconPreview: boolean;
    /**
     *Read-write. The number of images to hold in the cache.
     */
    imageCacheLevels: number[];
    /**
     *Read-write. The preferred policy for writing image previews in Windows.
     */
    imagePreviews: SaveBehavior;
    /**
     *Read-write. The method to use to assign color values to any new pixels created when an image is resampled or resized.
     */
    interpolation: ResampleMethod;
    /**
     *Read-write. True to automatically resize the window when zooming in or out using keyboard shortcuts.
     */
    keyboardZoomResizesWindows: boolean;
    /**
     *Read-write. True to create a thumbnail when saving the image (in Mac OS only).
     */
    macOSThumbnail: boolean;
    /**
     *Read-write. The preferred policy for checking whether to maximize compatibility when opening PSD files.
     */
    maximizeCompatibility: QueryStateType;
    /**
     *Read-write. The maximum percentage of available RAM used by Adobe Photoshop CC 2014 (5 - 100).
     */
    maxRAMuse: number[];
    /**
     *Read-write. True to allow non-linear history.
     */
    nonLinearHistory: boolean;
    /**
     *Read-write. The number of history states to preserve.
     */
    numberofHistoryStates: number;
    /**
     *Read-write. The preferred type of pointer to use with certain tools.
     */
    otherCursors: OtherPaintingCursors;
    /**
     *Read-write. The preferred type of pointer to use with certain tools.
     */
    paintingCursors: PaintingCursors;
    /**
     *Read-write. The containing application.
     */
    parent: Application;
    /**
     *Read-write. True to halve the resolution (double the size of pixels) to make previews display more quickly.
     */
    pixelDoubling: boolean;
    /**
     *Read-write. The point/pica size.
     */
    pointSize: PointType;
    /**
     *Read-write. The number of items in the recent file list.
     */
    recentFileListLength: number[];
    /**
     *Read-write. The unit the scripting system will use when receiving and returning values.
     */
    rulerUnits: Units;
    /**
     *Read-write. Thepreferred location of history log data when saving the history items.
     */
    saveLogItems: SaveLogItemsType;
    /**
     *Read-write. The path to the history log file, when the preferred location is a file.
     */
    saveLogItemsFile: File;
    /**
     *Read-write. True to make new palette locations the default location.
     */
    savePaletteLocations: boolean;
    /**
     *Read-write. True to display Asian text options in the Paragraph palette.
     */
    showAsianTextOptions: boolean;
    /**
     *Read-write. True to list Asian font names in English.
     */
    showEnglishFontNames: boolean;
    /**
     *Read-write. True to display slice numbers in the document window when using the Slice tool.
     */
    showSliceNumber: boolean;
    /**
     *Read-write. True to show pop up definitions on mouse over.
     */
    showToolTips: boolean;
    /**
     *Read-write. True to use curly, false to use straight quote marks.
     */
    smartQuotes: boolean;
    /**
     *Read-write. Size of the small font used in panels and dialogs.
     */
    textFontSize: FontSize;
    /**
     *Read-only. The class name of the referenced preferences object.
     */
    readonly typename: string;
    /**
     *Read-write. The preferred unit for text character measurements.
     */
    typeUnits: TypeUnits;
    /**
     *Read-write. True to use an additional folder for compatible plug-ins stored with a different application.
     */
    useAdditionalPluginFolder: boolean;
    /**
     *Read-write. True to create a log file for history states.
     */
    useHistoryLog: boolean;
    /**
     *Read-write. True to use lowercase for file extensions.
     */
    useLowerCaseExtension: boolean;
    /**
     *Read-write. True to enable cycling through a set of hidden tools.
     */
    useShiftKeyForToolSwitch: boolean;
    /**
     *Read-write. True to enable Adobe Photoshop CC 2014 to send transparency information to your computer’s video board. (Requires hardware support.)
     */
    useVideoAlpha: boolean;
    /**
     *Read-write. True to create a thumbnail when saving the image in Windows. (Requires hardware support.)
     */
    windowsThumbnail: boolean;



}


interface ArtLayer {
    /**
    *Read-write. True to completely lock the contents and settings of this layer.
    */
    allLocked: boolean;
    /**
    *Read-write. The blending mode.
    */
    blendMode: BlendMode;
    /**
    *Read-only. An array of coordinates that describes the bounding rectangle of the layer.
    */
    readonly bounds: UnitValue[];
    /**
    *Read-only. An array of coordinates that describes the bounding rectangle of the layer not including effects.
    */
    readonly boundsNoEffects: UnitValue[];
    /**
    *Read-write. The interior opacity of the layer, a percentage value.
    */
    fillOpacity: number[];
    /**
    *Read-write. The density of the filter mask (between 0.0 and 250.0)
    */
    filterMaskDensity: double;
    /**
    *Read-write. The feather of the filter mask (between 0.0 and 250.0)
    */
    filterMaskFeather: double;
    /**
    *Read-write. True if this layer is grouped with the layer beneath it.
    */
    grouped: boolean;
    /**
    *Read-write. True if this is the background layer of the document. A document can have only one background layer. If there is no background layer, setting this to true causes this to become the background layer.
    */
    isBackgroundLayer: boolean;
    /**
    *"Read-write. Sets the type (such as 'text layer') for an empty layer.
    */
    kind: LayerKind;
    /**
    *Read-write. The density of the layer mask (between0.0 and 100.0)
    */
    layerMaskDensity: double;
    /**
    *Read-write. The feather of the layer mask (between 0.0 and 250.0)
    */
    layerMaskFeather: double;
    /**
     * Read-only. The layers linked to this layer. See ArtLayer.link.
     *LayerSet or ArtLayer[]
    */
    readonly linkedLayers: ArtLayer[];
    /**
    *Read-write. The name.
    */
    name: string;
    /**
    *Read-write. The master opacity of the layer, a percentage value.
    */
    opacity: number[];
    /**
    *Read-only. The object's container.
    */
    readonly parent: Document;
    /**
    *Read-write. True if the pixels in the layer’s image cannot be edited using the paintbrush tool.
    */
    pixelsLocked: boolean;
    /**
    *Read-write. True if the pixels in the layer’s image cannot be moved within the layer.
    */
    positionLocked: boolean;
    /**
    *Read-only. The text item that is associated with the layer.
    */
    readonly textItem: TextItem;
    /**
    *Valid only when kind  = LayerKind.TEXT.
    */
    transparentPixelsLocke: boolean;
    /**
    *Read-write. True if editing is confined to the opaque portions of the layer.
    */
    typename: string;
    /**
    *Read-only. The class name of the referenced artLayer object.
    */
    readonly vectorMaskDensity: double;
    /**
    *Read-write. The density of the vector mask (between 0.0 and 250.0)
    */
    vectorMaskFeather: double;
    /**
    *Read-write. The feather of the vector mask (between 0.0 and 250.0)
    */
    visible: boolean;
    /**
    *Read-write. True if the layer is visible. Read-write. Metadata for the layer.
    */
    xmpMetadata: xmpMetadata;

    /**
     *Adjusts the brightness in the range [-100..100] and contrast [-100..100].
     */
    adjustBrightnessContrast(brightness: number, contrast: number): void;
    /**
    *Adjusts the color balance of the layer’s component channels. For shadows, midtones, and highlights, the array must include three values in the range [-100..100], which represent cyan or red, magenta or green,
    and yellow or blue, when the document mode is CMYK or RGB.
    */
    adjustColorBalance(shadows?: number[], midtones?: number[], highlights?: number[], preserveLuminosity?: boolean): void;
    /**
    *Adjusts the tonal range of the selected channel using up to fourteen points.Each value in the curveShape array is a point pair, an array of an x and y integer value.
    */
    adjustCurves(curveShape: [number[]]): void;
    /**
    *Adjusts the levels of the selected channels
    */
    adjustLevels(inputRangeStart: number[], inputRangeEnd: number[], inputRangeGamma: number[], outputRangeStart: number[], outputRangeEnd: number[]): void;
    /**
    *"Applies the Add Noise filter amount is a percentage value."
    */
    applyAddNoise(amount: number[], distribution: NoiseDistribution, monochromatic: boolean): void;
    /**
    *Applies the Average filter.
    */
    applyAverage(): void;
    /**
    *Applies the Blur filter.
    */
    applyBlur(): void;
    /**
    *Applies the Blur More filter.
    */
    applyBlurMore(): void;
    /**
    *Applies the Clouds filter.
    */
    applyClouds(): void;
    /**
     *Applies a custom filter.The characteristics array has 25 members.See Adobe Photoshop CC 2014 Help for specific instructions.
     */
    applyCustomFilter(characteristics: number[], scale: number, offset: number): void;
    /**
     *Applies the De-Interlace filter.
     */
    applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void;
    /**
     *Applies the Despeckle filter.
     */
    applyDespeckle(): void;
    /**
     *Applies the Difference Clouds filter.
     */
    applyDifferenceClouds(): void;
    /**
     *Applies the Diffuse Glow filter.
     */
    applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void;
    /**
     *Applies the Displace filter using the specified horizontal and vertical scale, mapping type, treatment of undistorted areas, and path to the distortion image map.
     */
    applyDisplace(horizontalScale: number, verticalScale: number, displacement: DisplacementMapType, undefinedareas: UndefinedAreas, displacementMapFiles: File): void;
    /**
     *Applies the Dust & Scratches filter.
     */
    applyDustAndScratches(radius: number[], threshold: number[]): void;
    /**
     *Applies the Gaussian Blur filter within the specified radius (in pixels)
     */
    applyGaussianBlur(radius: number[]): void;
    /**
     *Applies the Glass filter.scaling is a percentage value.
     */
    applyGlassEffect(distortion: number[], smoothness: number[], scaling: number[], invert?: boolean, texture?: TextureType, textureFile?: File): void;
    /**
     *Applies the High Pass filter within the specified radius.
     */
    applyHighPass(radius: number[]): void;

    /**
     *Applies the De-Interlace filter.
     */
    applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void;
    /**
     *Applies the Despeckle filter.
     */
    applyDespeckle(): void;
    /**
     *Applies the Difference Clouds filter.
     */
    applyDifferenceClouds(): void;
    /**
     *Applies the Diffuse Glow filter.
     */
    applyDiffuseGlow(graininess: number[], glowAmount: number[], clearAmount: number[]): void;
    /**
     *Applies the Displace filter using the specified horizontal and vertical scale, mapping type, treatment of undistorted areas, and path to the distortion image map.
     */
    applyDisplace(horizontalScale: number[], verticalScale: number[], displacement: DisplacementMapType, undefinedareas: UndefinedAreas, displacementMapFiles: File): void;
    /**
     *Applies the Dust & Scratches filter.
     */
    applyDustAndScratches(radius: number[], threshold: number[]): void;
    /**
     *Applies the Gaussian Blur filter within the specified radius (in pixels)
     */
    applyGaussianBlur(radius: number[]): void;
    /**
     *Applies the Glass filter.scaling is a percentage value.
     */
    applyGlassEffect(distortion: number[], smoothness: number[], scaling: number[], invert?: boolean, texture?: TextureType, textureFile?: File): void;
    /**
     *Applies the High Pass filter within the specified radius.
     */
    applyHighPass(radius: number[]): void;

    /**
     *Applies the Lens Blur filter.
     */
    applyLensBlur(source?: DepthMapSource, focalDistance?: number, invertDepthMap?: boolean, shape?: Geometry, radius?: number, bladeCurvature?: number, rotation?: number, brightness?: number, threshold?: number, amount?: number, distribution?: NoiseDistribution, monochromatic?: boolean): void;
    /**
     *Applies the Lens Flare filter with the specified brightness (0 - 300, as a percentage), the x and y coordinates (unit value) of the flare center, and the lens type.
     */
    applyLensFlare(brightness: number, flareCenter: UnitValue[], lensType: LensType): void;
    /**
     *Applies the Maximum filter within the specified radius (in pixels).
     */
    applyMaximum(radius: number[]): void;
    /**
     *Applies the Median Noise filter within the specified radius (in pixels).
     */
    applyMedianNoise(radius: number[]): void;
    /**
     *Applies the Minimum filter within the specified radius (in pixels) (1 - 100).
     */
    applyMinimum(radius: number[]): void;
    /**
     *Applies the Motion Blur filter.
     */
    applyMotionBlur(angle: number[], radius: number[]): void;
    /**
     *Applies the NTSC colors filter.
     */
    applyNTSC(): void;
    /**
     *Applies the Ocean Ripple filter.
     */
    applyOceanRipple(size: number[], magnitude: number[]): void;
    /**
     *Moves the layer the specified amount horizontally and vertically (min/max amounts depend on layer size), leaving an undefined area at the layer’s original location.
     */
    applyOffset(horizontal: UnitValue, vertical: UnitValue, undefinedAreas: OffsetUndefinedAreas): void;
    /**
     *Applies the Pinch filter.amount is a percentage value.
     */
    applyPinch(amount: number[]): void;
    /**
     *Applies the Polar Coordinates filter.
     */
    applyPolarCoordinates(conversion: PolarConversionType): void;
    /**
     *Applies the Radial Blur filter in the specified amount, using either a spin or zoom effect and the specified quality.
     */
    applyRadialBlur(amount: number[], blurMethod: RadialBlurMethod, blurQuality: RadialBlurQuality): void;
    /**
     *Applies the Ripple filter in the specified amount, throughout the image and in the specified size.
     */
    applyRipple(amount: number[], size: RippleSize): void;
    /**
     *Applies the Sharpen filter.
     */
    applySharpen(): void;
    /**
     *Applies the Sharpen Edges filter. Applies the Sharpen More filter.
     */
    applySharpenEdges(): void;
    /**
     *Applies the Shear filter.
     */
    applySharpenMore(): void;
    /**
     *The curve defines a curve with [2..255] points.Each value in the curve array is a point pair, an array of an x and y integer value.
     */
    applyShear(curve: [number[]], undefinedAreas: UndefinedAreas): void;
    /**
     *Applies the Smart Blur filter.
     */
    applySmartBlur(radius: number[], threshold: number[], blurQuality: SmartBlurQuality, mode: SmartBlurMode): void;
    /**
     *Applies the Spherize filter.amount is a percentage value.
     */
    applySpherize(amount: number[], mode: SpherizeMode): void;
    /**
     *Applies the specified style to the ayer. You must use a style from the Styles list in the Layer Styles Palette.
     */
    applyStyle(styleName: string): void;
    /**
     *Applies the Texture Fill filter.
     */
    applyTextureFill(textureFile: File): void;
    /**
     *Applies the Twirl filter.
     */
    applyTwirl(angle: number[]): void;
    /**
     *Applies the Unsharp Mask filter. (amount is a percentage value.
     */
    applyUnSharpMask(amount: number[], radius: number[], threshold: number[]): void;
    /**
     *Applies the Wave filter. Scale factors are percentage values.
     */
    applyWave(generatorNumber: number[], minimumWavelength: number[], maximumWavelength: number[], minimumAmplitude: number[], maximumAmplitude: number[], horizontalScale: number[], verticalScale: number[], waveType: WaveType, undefinedAreas: UndefinedAreas, randomSeed: number): void;
    /**
     *Applies the Zigzag filter.
     */
    applyZigZag(amount: number[], ridges: number[], style: ZigZagType): void;
    /**
     *Adjusts the contrast of the selected channels automatically.
     */
    autoContrast(): void;
    /**
     *Adjusts the levels of the selected channels using the auto levels option.
     */
    autoLevels(): void;
    /**
     *Cuts the layer without moving it to the clipboard.
     */
    clear(): void;
    /**
     *Copies the layer to the clipboard. When the optional argument is set to true, a merged copy is performed (that is, all visible layers are copied to the clipboard).
     */
    copy(merge?: boolean): void;
    /**
     *Cuts the layer to the clipboard.
     */
    cut(): void;
    /**
     *Converts a color image to a grayscale image in the current color mode by assigning equal values of each component color to each pixel.
     */
    desaturate(): void;
    /**
     *Creates a duplicate of the object on the screen.
     */
    duplicate(relativeObject?: ArtLayer, insertionLocation?: ElementPlacement): void;
    /**
     *Redistributes the brightness values of pixels in an image to more evenly represent the entire range of brightness levels within the image.
     */
    equalize(): void;
    /**
     *Inverts the colors in the layer by converting the brightness value of each pixel in the channels to the inverse value on the 256-step color-values scale.
     */
    invert(): void;
    /**
     *Links the layer with the specified layer.
     */
    link(withs: ArtLayer): void;
    /**
     *Merges the layer down, removing the layer from the document; returns a reference to the art layer that this layer is merged into.
    */
    merge(): void;
    /**
     *Modifies a targeted (output) color channel using a mix of the existing color channels in the image.
     */
    mixChannels(outputChannels: [number[]], monochrome?: boolean): void;
    /**
     *Moves the layer relative to the object specified in parameters.
     */
    move(relativeObject: ArtLayer, insertionLocation: ElementPlacement): void;
    /**
     *Adjust the layer’s color balance and temperature as if a color filter had been applied.
     */
    photoFilter(fillColor: SolidColor, density: number[], preserveLuminosity: boolean): void;
    /**
     *Specifies the number of tonal levels for each channel and then maps pixels to the closest matching level.
     */
    posterize(levels: number[]): void;
    /**
     *Converts the targeted contents in the layer into a flat, raster image.
     */
    rasterize(target: RasterizeType): void;
    /**
     *Deletes the object.
     */
    remove(): void;
    /**
     *Resizes the layer to the specifie dimensions (as a percentage of ts current size) and places it in the specified position.
     */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void;
    /**
     *Rotates rotates the layer around the specified anchor point (default: MIDDLECENTER).
     */
    rotate(angle: number, anchor?: AnchorPosition): void;
    /**
     *Modifies the amount of a process color in a specified primary color without affecting the other primary colors.Each color array must have four values.
     */
    selectiveColor(selectionMethod: AdjustmentReference, reds?: number[], yellows?: number[], greens?: number[], cyans?: number[], blues?: number[], magentas?: number[], whites?: number[], neutrals?: number[], blacks?: number[]): void;
    /**
     *Adjusts the range of tones in th mage’s shadows and highlights.Amounts and widths are percentage values. Radius values are in pixels.
     */
    shadowHighlight(shadowAmount?: number[], shadowWidth?: number[], shadowRadius?: number[], highlightAmount?: number[], highlightWidth?: number[], highlightRadius?: number[], colorCorrection?: number[], midtoneContrast?: number[], blackClip?: number[], whiteClip?: number[]): void;
    /**
     *Converts grayscale or color mages to high-contrast, B/W mages by converting pixels ighter than the specified threshold to white and pixels darker than the threshold to black.
     */
    threshold(level: number[]): void;
    /**
     *Moves the layer the specified amount (in the given unit) relative to its current position.
     */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void;
    /**
     *Unlinks the layer.
     */
    unlink(): void;
}

/**
 * The text in an ArtLayer object whose kind property is LayerKind.TEXT. 
 * Access this object in the ArtLayer.textItem property. 
 * For example:
 * myLayers[i].textItem.contents = "Layer in " + textArray[i] + " Set Inside "
 * Many of the properties use the UnitValue type, which combines a measurement value with a 
 * measurement unit. For information about this type, see the JavaScript Tools Guide.
 */
interface TextItem {
    /**
     *Read-write. True to use alternate ligatures.Note:  Alternate ligatures are the same as Discretionary Ligatures. See Adobe Photoshop CC 2014 Help for more information.
     */
    alternateLigatures: boolean;
    /**
     *Read-write. The method of anti aliasing to use.
     */
    antiAliasMethod: AntiAlias;
    /**
     *Read-write. The auto kerning option to use.
     */
    autoKerning: AutoKernType;
    /**
     *Read-write. The percentage to use for auto (default) leading (in points).Valid only when useAutoLeading  = true.
     */
    autoLeadingAmount: number[];
    /**
     *Read-write. The unit value to use in the baseline offset of text.
     */
    baselineShift: UnitValue;
    /**
     *Read-write. The text case.
     */
    capitalization: TextCase;
    /**
     *Read-write. The text color.
     */
    color: SolidColor;
    /**
     *Read-write. The actual text in the layer.
     */
    contents: string;
    /**
     *Read-write. The desired amount by which to scale the horizontal size of the text letters. A percentage value; at 100, the width of characters is not scaled.Valid only when justification  = Justification.CENTER
    JUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, or Justification.RIGHTJUSTIFIED.When used, the minimumGlyphScaling and maximumGlyphScaling values are also required.
     */
    desiredGlyphScaling: number[];
    /**
     *Read-write. The amount of space between letters (at 0, no space is added between letters).Equivalent to Letter Spacing in the Justification dialog (Select Justification on the Paragraphs palette menu).Valid on
    ly when justification  = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, or Justification.RIGHTJUSTIFIED.When used, the minimumLetterScaling and maximumLetterScaling values are also required.
     */
    desiredLetterScaling: number[];
    /**
     *Read-write. The amount (percentage) of space between words (at 100, no additional space is added between words).Equivalent to Word Spacing in the Justification dialog (Select Justification on the Paragraphs pa
    lette menu).Valid only when justification  = Justification.CENTERJUSTIFIED, FULLYJUSTIFIED, LEFTJUSTIFIED, or Justification.RIGHTJUSTIFIED. When used, the minimumWordScaling and maximumWordScaling values are als
    o required.
     */
    desiredWordScaling: number[];
    /**
     *Read-write. The text orientation.
     */
    direction: Direction;
    /**
     *Read-write. True to use faux bold (default: false).Setting this to true is equivalent to selecting text and clicking Faux Bold in the Character palette.
     */
    fauxBold: boolean;
    /**
     *Read-write. True to use faux italic (default: false).Setting this to true is equivalent to selecting text and clicking Faux Italic in the Character palette.
     */
    fauxItalic: boolean;
    /**
     *Read-write. The amount (unit value) to indent the first line of paragraphs.
     */
    firstLineIndent: UnitValue[];
    /**
     *Read-write. The text face of the character. Use the PostScript Name of the font. See TextFont and use the postScriptName property.
     */
    font: string;
    /**
     *Read-write. True to use Roman hanging punctuation.
     */
    hangingPunctuation: boolean;
    /**
     *Read-write. The height of the bounding box (unit value) for paragraph text.Valid only when kind  = TextType.PARAGRAPHTEXT.
     */
    height: UnitValue;
    /**
     *Read-write. Character scaling (horizontal) in proportion to verticalScale (a percentage value).
     */
    horizontalScale: number[];
    /**
     *Read-write. The number of letters after which hyphenation in word wrap is allowed.
     */
    hyphenateAfterFirst: number[];
    /**
     *Read-write. The number of letters before which hyphenation in word wrap is allowed.
     */
    hyphenateBeforeLast: number[];
    /**
     *Read-write. True to allow hyphenation in word wrap of capitalized words.
     */
    hyphenateCapitalWords: boolean;
    /**
     *Read-write. The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed.
     */
    hyphenateWordsLongerThan: number[];
    /**
     *Read-write. True to use hyphenation in word wrap.
     */
    hyphenation: boolean;
    /**
     *Read-write. The distance at the end of a line that will cause a word to break in unjustified type.
     */
    hyphenationZone: UnitValue[];
    /**
     *Read-write. The maximum number of consecutive lines that can end with a hyphenated word.
     */
    hyphenLimit: number;
    /**
     *Read-write. The paragraph justification.
     */
    justification: Justification;
    /**
     *Read-write. The text-wrap type.
     */
    kind: TextType;
    /**
     *Read-write. The language to use.
     */
    language: Language;
    /**
     *Read-write. The leading amount.
     */
    leading: UnitValue;
    /**
     *Read-write. The amoun of space to indent text from the left.
     */
    leftIndent: UnitValue[];
    /**
     *Read-write. True to use ligatures.
     */
    ligatures: boolean;
    /**
     *Read-write. The maximum amount to scale the horizontal size of the text letters (a percentage value; at 100, the width of characters is not scaled).Valid only when justification  = Justification.CENTERJUSTIFIE
    D, FULLYJUSTIFIED, LEFTJUSTIFIED, or Justification.RIGHTJUSTIFIED. When used, the minimumGlyphScaling and desiredGlyphScaling values are also required.
     */
    maximumGlyphScaling: number[];
    /**
     *Read-write. The maximum amount of space to allow between letters (at 0, no space is added between letters). Equivalent to Letter Spacing in the Justification dialog (Select Justification on the Paragraphs pale
    tte menu).
     */
    maximumLetterScaling: number[];
    /**
     *Read-write. The maximum amount of space to allow between words (a percentage value; at 100, no additional space is added between words). Equivalent to Word Spacing in the Justification dialog (Select Justifica
    tion on the Paragraphs palette menu).
     */
    maximumWordScaling: number[];
    /**
     *Read-write. The minimum amount to scale the horizontal size of the text letters (a percentage value; at 100, the width of characters is not scaled).
     */
    minimumGlyphScaling: number[];
    /**
     *Read-write. The minimum amount of space to allow between letters (a percentage value; at 0, no space is removed between letters).
     */
    minimumLetterScaling: number[];
    /**
     *Read-write. The minimum amount of space to allow between words (a percentage value; at 100, no additional space is removed between words).
     */
    minimumWordScaling: number[];
    /**
     *Read-write. True to disallow line breaks in this text.
     */
    noBreak: boolean;
    /**
     *Read-write. True to use old style type.
     */
    oldStyle: boolean;
    /**
     *Read-write. The containing layer.
     */
    parent: ArtLayer;
    /**
     *Read-write. The position of origin for the text. The array members specify the X and Y coordinates. Equivalent to clicking the text tool at a point in the document to create the point of origin for text.E54:G5
    4
     */
    position: UnitValue[];
    /**
     *Read-write. The amount of space to indent text from the right.
     */
    rightIndent: UnitValue[];
    /**
     *Read-write. The font size in UnitValue . NOTE: Type was points for CS3 and older..
     */
    size: UnitValue;
    /**
     *Read-write. The amount of space to use after each paragraph.
     */
    spaceAfter: UnitValue[];
    /**
     *Read-write. The amount of space to use before each paragraph.
     */
    spaceBefore: UnitValue[];
    /**
     *Read-write. The text strike-through option to use.
     */
    strikeThru: StrikeThruType;
    /**
     *Read-write. The composition method to use to evaluate line breaks and optimize the specified hyphenation and justification options. Valid only when kind  = TextType.PARAGRAPHTEXT.
     */
    textComposer: TextComposer;
    /**
     *Read-write. The amount of uniform spacing between multiple characters.Tracking units are 1/1000 of an em space. The width of an em space is relative to the current type size. In a 1-point font, 1 em equals 1 p
    oint; in a 10-point font, 1 em equals 10 points. So, for example, 100 units in a 10-point font are equivalent to 1 point.
     */
    tracking: number[];
    /**
     *Read-only. The class name of the referenced textItem object.
     */
    readonly typename: string;
    /**
     *Read-write. The text underlining options.
     */
    underline: UnderlineType;
    /**
     *Read-write. True to use a font's built-in leading information.
     */
    useAutoLeading: boolean;
    /**
     *Read-write. Vertical character scaling in proportion to horizontalScale (a percentage value).
     */
    verticalScale: number[];
    /**
     *Read-write. The warp bend percentage.
     */
    warpBend: number[];
    /**
     *Read-write. The warp direction.
     */
    warpDirection: Direction;
    /**
     *Read-write. The horizontal distortion of the warp (a percentage value).
     */
    warpHorizontalDistortion: number[];
    /**
     *Read-write. The style of warp to use.
     */
    warpStyle: WarpStyle;
    /**
     *Read-write. The vertical distortion of the warp (a percentage value).
     */
    warpVerticalDistortion: number[];
    /**
     *Read-write. The width of the bounding box for paragraph text. Valid only when kind  = TextType.PARAGRAPHTEXT.
     */
    width: UnitValue;

    /**
     * Converts the text item and its containing layer to a fill layer with the text changed to a clipping path.
     */
    convertToShape(): void;

    /**
     * Creates a clipping path from the outlines of the actual text items (such as letters or words).
     */
    createPath(): void;


}

declare var SolidColor: {
    new ();
};

interface SolidColor {
    /**
     * Read-write. The CMYK color mode.
     */
    cmyk: CMYKColor;
    /**
     * Read-write. The Grayscale color mode.
     */
    gray: GrayColor;
    /**
     * Read-write. The HSB color mode.
     */
    hsb: HSBColor;
    /**
     * Read-write. The LAB color mode.
     */
    lab: LabColor;
    /**
     * Read-write. The color model.
     */
    model: ColorModel;
    /**
     * Read-only. The nearest web color to the current color.
     */
    nearestWebColor: RGBColor;
    /**
     * Read-write. The RGB color mode.
     */
    rgb: RGBColor;
    /**
     * Read-only. The class name of the referenced SolidColor object.
     */
    typename: string;
    /**
     * True if the SolidColor object is visually equal to the specified color.
     */
    isEqual(color: SolidColor): boolean;
}



interface ArtLayers {
    /**
     * Read-only. The number of elements in the artLayers collection.
     */
    readonly length: number;
    /**
     * Read-only.The object's container.
     */
    readonly parent: Document;
    /**
     * Read-only. The class name of the referenced artLayers object.
     */
    readonly typename: string;
    /**
     * Creates a new art layer in the document and adds the new object to this collection.
     */
    add(): ArtLayer;

    /**
     * Get the first element in the artLayers collection with the provided name.
     */
    getByName(name: string): ArtLayer;

    /**
     * Removes all elements from the artLayers collection.
     */
    removeAll(): void;

}



interface activeDocument {

}


/**
 * 文档类
 */
interface document {
    artLayers: artLayers;
    /**
     * 创建文件
     */
    add(width: UintValue, height: UintValue): void;
}

interface font {

}

/**
 * 图层
 */
interface artLayers {
    add();
}


declare function alert(content: string): void;

interface UintValue {

}

/**
 * 
 */
// declare function UnitValue(value: any): UintValue;



/**
 * The value type of an action key, returned by ActionDescriptor.getType() and ActionList.getType().
 */
declare enum DescValueType {
    ALIASTYPE,
    BOOLEANTYPE,
    CLASSTYPE,
    DOUBLETYPE,
    ENUMERATEDTYPE,
    INTEGERTYPE,
    LARGEINTEGERTYPE,
    LISTTYPE,
    OBJECTTYPE,
    RAWTYPE,
    REFERENCETYPE,
    STRINGTYPE,
    UNITDOUBLE
}

/**
 * The type of an ActionReference object, returned by getForm().
 */
declare enum ReferenceFormType {
    CLASSTYPE,
    ENUMERATED,
    IDENTIFIER,
    INDEX,
    NAME,
    OFFSET,
    PROPERTY
}

/**
 * Controls the type of dialogs Photoshop displays when running scripts.
 */
declare enum DialogModes {
    ALL,
    ERROR,
    NO
}

/**
 * The color profile to use for a new document.
 * Pass to Documents.add().
 * Also used in ContactSheetOptions and PicturePackageOptions.
 */
declare enum NewDocumentMode {
    BITMAP,
    CMYK,
    GRAYSCALE,
    LAB,
    RGB
}

/**
 * The fill type of a new document, passed to Documents.add().
 */
declare enum DocumentFill {
    BACKGROUNDCOLOR,
    TRANSPARENT,
    WHITE
}

/**
 * The number of bits per color channel.
 * Value of Document.bitsPerChannel;
 * pass to Documents.add(). Also used in PDFOpenOptions and CameraRAWOpenOptions.
 */
declare enum BitsPerChannelType {
    EIGHT,
    ONE,
    SIXTEEN,
    THIRTYTWO
}

/**
 * The fonts to use for the Web photo gallery captions and other text. 
 * Used in GalleryBannerOptions, GalleryImagesOptions, and GalleryThumbnailOptions.
 * Also used in PicturePackageOptions.
 */
declare enum GalleryFontType {
    ARIAL,
    COURIERNEW,
    HELVETICA,
    TIMESNEWROMAN
}

/**
 * The format in which to open the document, using app.open().
 * Note: PHOTOCD is deprecated. Kodak PhotoCD is now found in the Goodies folder on the Adobe Photoshop CC 2014 Install DVD.
 * Note: The DICOM option is for the Extended version only.
 */
declare enum OpenDocumentType {
    ALIASPIX,
    BMP,
    CAMERARAW,
    COMPUSERVEGIF,
    DICOM,
    ELECTRICIMAGE,
    EPS,
    EPSPICTPREVIEW,
    EPSTIFFPREVIEW,
    FILMSTRIP,
    JPEG,
    PCX,
    PDF,
    PHOTOCD,
    PHOTOSHOP,
    PHOTOSHOPDCS_1,
    PHOTOSHOPDCS_2,
    PHOTOSHOPEPS,
    PHOTOSHOPPDF,
    PICTFILEFORMAT,
    PICTRESOURCEFORMAT,
    PIXAR,
    PNG,
    PORTABLEBITMAP,
    RAW,
    SCITEXCT,
    SGIRGB,
    SOFTIMAGE,
    TARGA,
    TIFF,
    WAVEFRONTRLA,
    WIRELESSBITMAP
}

/**
 * Cache to be targeted in an Application.purge() operation.
 */
declare enum PurgeTarget {
    ALLCACHES,
    CLIPBOARDCACHE,
    HISTORYCACHES,
    UNDOCACHES
}


/**
 * The function or meaning of text in a Picture Package. Used in PicturePackageOptions.
 */
declare enum PicturePackageTextType {
    CAPTION,
    COPYRIGHT,
    CREDIT,
    FILENAME,
    NONE,
    ORIGIN,
    USER
}

/**
 * The position of the text displayed over gallery images as an antitheft deterrent.
 * Used in GallerySecurityOptions.
 * Also used in PicturePackageOptions.
 */
declare enum GallerySecurityTextPositionType {
    CENTERED,
    LOWERLEFT,
    LOWERRIGHT,
    UPPERLEFT,
    UPPERRIGHT
}

/**
 * The orientation of the text displayed over gallery images as an antitheft deterrent.
 * Used in GallerySecurityOptions. Also used in PicturePackageOptions.
 */
declare enum GallerySecurityTextRotateType {
    CLOCKWISE45,
    CLOCKWISE90,
    COUNTERCLOCKWISE45,
    COUNTERCLOCKWISE90,
    ZERO
}

/**
 * The preferred color-selection tool, set in Preferences.
 */
declare enum ColorPicker {
    ADOBE,
    APPLE,
    PLUGIN,
    WINDOWS
}

/**
 * The type of magnification to use when viewing an image. Used in PresentationOptions.
 */
declare enum MagnificationType {
    ACTUALSIZE,
    FITPAGE
}

/**
 * The application’s preferred behavior when saving a document. See Preferences.appendExtension and imagePreviews
 */
declare enum SaveBehavior {
    ALWAYSSAVE,
    ASKWHENSAVING,
    NEVERSAVE
}

/**
 * The preferred type size to use for panels and dialogs, set in Preferences.
 */
declare enum FontSize {
    LARGE,
    MEDIUM,
    SMALL
}

/**
 *The type of a layer object, in ArtLayer.kind.
 Note: You can create a text layer only from an empty art layer.
 */
declare enum LayerKind {
    BLACKANDWHITE,
    BRIGHTNESSCONTRAST,
    CHANNELMIXER,
    COLORBALANCE,
    CURVES,
    EXPOSURE,
    GRADIENTFILL,
    GRADIENTMAP,
    HUESATURATION,
    INVERSION,
    LEVELS,
    NORMAL,
    PATTERNFILL,
    PHOTOFILTER,
    POSTERIZE,
    SELECTIVECOLOR,
    SMARTOBJECT,
    SOLIDFILL,
    TEXT,
    THRESHOLD,
    LAYER3D,
    VIBRANCE,
    VIDEO
}


/**
 * The type of text, used in TextItem.kind.
 * PARAGRAPHTEXT: Text that wraps within a bounding box.
 * POINTTEXT: Text that does not wrap.
 */
declare enum TextType {
    PARAGRAPHTEXT,
    POINTTEXT
}

/**
 * The placement of paragraph text within the bounding box. Used in TextItem.justification.
 */
declare enum Justification {
    CENTER,
    CENTERJUSTIFIED,
    FULLYJUSTIFIED,
    LEFT,
    LEFTJUSTIFIED,
    RIGHT,
    RIGHTJUSTIFIED
}