<script>
import { defineComponent, reactive, computed } from 'vue';
import highlightjs from '@/components/plugins/Highlightjs.vue';
import vueTable from '@/components/plugins/VueTable.vue';
import navscrollto from '@/components/app/NavScrollTo.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';
import { ScrollSpy } from 'bootstrap';

const appVariable = useAppVariableStore();

export default {
	data () {
		const data = reactive([]);
    for (let i = 0; i < 126; i++) {
      data.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com",
      });
    }
    
    // Table config
    const table = reactive({
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true,
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true,
        },
      ],
      rows: data,
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc",
      },
    });
    
		return {
			code1: '',
			table
		}
	},
	components: {
		highlightjs: highlightjs,
		navScrollTo: navscrollto,
		vueTable: vueTable
	},
	mounted() {
		axios.get('/assets/data/table/plugin-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		
		new ScrollSpy(document.body, {
			target: '#sidebar-bootstrap',
			offset: 200
		})
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
			<li class="breadcrumb-item active"><a href="javascript:;">Table Plugins</a></li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Table Plugins <small>page header description goes here...</small></h1>
		<!-- END page-header -->
		
		<!-- BEGIN #vue3TableLite -->
		<panel>
			<panel-header>
				<panel-title>Vue3 Table Lite</panel-title>
				<panel-toolbar />
			</panel-header>
			<panel-body>
				<p>Vue3 Table Lite is a simple and lightweight data table component for Vue.js 3. Features sorting, paging, row check, dynamic data rendering, supported TypeScript, and more. Please read the <a href="https://github.com/linmasahiro/vue3-table-lite" target="_blank">official documentation</a> for the full list of options.</p>
				<vue-table class="vue-table"
					:is-static-mode="true"
					:columns="table.columns"
					:rows="table.rows"
					:total="table.totalRecordCount"
					:sortable="table.sortable" />
			</panel-body>
			<highlightjs :code="code1" />
		</panel>
		<!-- END #vue3TableLite -->
	</div>
</template>