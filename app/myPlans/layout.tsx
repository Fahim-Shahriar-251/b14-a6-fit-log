import MyPlanLayoutCard from "@/components/myPlans/MyPlanLayoutCard";


const MyPlansLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='mt-5 space-y-5'>
            <div>
                <h2 className='text-5xl font-extrabold'>MY PLAN</h2>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <MyPlanLayoutCard></MyPlanLayoutCard>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MyPlansLayout;