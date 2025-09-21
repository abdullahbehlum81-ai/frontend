// pannel method is given
interface RowObject {
    created_at: string
    updated_at: string
}
interface DateFnTypes {
    row: RowObject
}
function CreateAt({ row }: DateFnTypes) {
    const createdAt = new Date(row.created_at);
    return createdAt.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

function Updated_At({ row }: DateFnTypes) {
    const updatedAt = new Date(row.updated_at);
    return updatedAt.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

export {
    CreateAt,
    Updated_At
}
// pannel method is End