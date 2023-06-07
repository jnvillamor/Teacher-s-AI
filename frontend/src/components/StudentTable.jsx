function StudentTable(){
    return (
<div class="absolute left-[397px] top-[872px] overflow-auto">
  <table class=" w-[1000px] text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-normal text-white text-2xl/[21px] border-b-2">
          <tr>
              <th scope="col" class="px-3 py-3">
                  Student Name
              </th>
              <th scope="col" class="px-3 py-3 text-right">
                  Student ID
              </th>
              <th scope="col" class="px-8 py-3">
                  
              </th> 
          </tr>
      </thead>

      <tbody>
          <tr class="border-b text-white text-base">
              <th scope="row" class="px-5 py-4 font-normal">
                  Kaye Jose
              </th>
              <td class="px-6 py-4 text-right">
                  CRS01QZ01
              </td>
              <td class="px-2 py-4 text-right">
                  <button class="border-2 width-[93px] h-[36px] px-4 bg-[#FD6531] border-[#FD6531] rounded flex-auto font-montserrat">Analyze</button>
              </td>
          </tr>

          <tr class="border-b text-white text-base">
            <th scope="row" class="px-5 py-4 font-normal">
                John Noel Villamor
            </th>
            <td class="px-6 py-4 text-right">
                CRS01QZ02
            </td>
            <td class="px-2 py-4 text-right">
              <button class="border-2 width-[93px] h-[36px] px-4 bg-[#FD6531] border-[#FD6531] rounded flex-auto font-montserrat">Analyze</button>
          </td>
        </tr>

        <tr class="border-b text-white text-base">
          <th scope="row" class="px-5 py-4 font-normal">
              Robert Jay Quimno
          </th>
          <td class="px-6 py-4 text-right">
              CRS01QZ03
          </td>
          <td class="px-2 py-4 text-right">
            <button class="border-2 width-[93px] h-[36px] px-4 bg-[#FD6531] border-[#FD6531] rounded flex-auto font-montserrat">Analyze</button>
        </td>
        </tr>

      <tr class="border-b text-white text-base">
        <th scope="row" class="px-5 py-4 font-normal">
            Corally Into
        </th>
        <td class="px-6 py-4 text-right">
            CRS01QZ04
        </td>
        <td class="px-2 py-4 text-right">
          <button class="border-2 width-[93px] h-[36px] px-4 bg-[#FD6531] border-[#FD6531] rounded flex-auto font-montserrat">Analyze</button>
      </td>
       </tr>

       <tr class="border-b text-white">
        <td class="px-3 py-4">
          <div class="flex text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>
              <p>&nbsp;Add Student</p>
          </div>
        </td>
       </tr>

      </tbody>
  </table>

</div>
    );
}

export default StudentTable;