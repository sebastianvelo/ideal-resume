import Text from "@components/ui/text/Text";
import type { UseMultiItemForm } from "@hooks/form/useMultiItemForm";
import Icons from "@icons/Icons";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GenericItem from "../../item/GenericItem";

interface AddedItemsListProps<T extends { id: string }> {
    dataKey: keyof UserDataItems;
    form: UseMultiItemForm<T>;
}

const AddedItemList = <T extends { id: string }>(props: AddedItemsListProps<T>) => {
    const { dataKey, form } = props;

    return (
        <>
            <Icons.LineSeparator />
            {form.items.length === 0 ? (
                <Text className="text-secondary-500 italic p-4">{`form.data.${dataKey}.empty`}</Text>
            ) : (
                <DndProvider backend={HTML5Backend}>
                    <div className="space-y-2 bg-accent-500/10 dark:bg-accent-900/50 rounded-md lg:p-2">
                        {form.items.map((item, index) => (
                            <GenericItem key={item.id} dataKey={dataKey} item={item} index={index} handleDelete={form.delete} handleEdit={form.edit} handleSwap={form.swap} />
                        ))}
                    </div>
                </DndProvider>
            )}
        </>
    );
};

export default AddedItemList;