export function formatCurrency(n:number){ return '$' + n.toLocaleString(); }
export function statusColor(status:string){
  if(status==='Halal') return 'bg-green-100 text-green-800';
  if(status==='Questionable') return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
}
